class User < ApplicationRecord
  attr_reader :password
  validates :session_token, :email, presence: true, uniqueness: true
  validates :password_digest, :firstname,  presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    else 
      nil
    end 
  end 

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end 

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end 

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
  end 

  
end
