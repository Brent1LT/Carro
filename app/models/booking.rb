class Booking < ApplicationRecord
  validates :start_date, :end_date, presence: true

  belongs_to :listing, 
  foreign_key: :listing_id,
  class_name: 'Listing'

  belongs_to :user,
  foreign_key: :user_id,
  class_name: 'User'
end
