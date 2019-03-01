class Listing < ApplicationRecord
  validates :guidelines, :trip_counter, :price, :location

  belongs_to :user, 
  foreign_key: :user_id,
  class_name: 'User'
end
