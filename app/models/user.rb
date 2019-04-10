# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  firstname       :string           not null
#  lastname        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password
  validates :session_token, :email, presence: true, uniqueness: true
  validates :password_digest, :firstname,  presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

  has_many :listings, 
  foreign_key: :user_id,
  class_name: 'Listing'

  has_many :cars,
  foreign_key: :user_id,
  class_name: 'Car'

  has_many :bookings,
  foreign_key: :user_id,
  class_name: 'Booking'

  has_one_attached :photo

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
  end 

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end 

  
end
