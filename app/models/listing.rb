# == Schema Information
#
# Table name: listings
#
#  id           :bigint(8)        not null, primary key
#  guidelines   :string           not null
#  location     :string           not null
#  extras       :text
#  trip_counter :integer          not null
#  price        :integer          not null
#  user_id      :integer          not null
#  car_id       :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Listing < ApplicationRecord
  validates :guidelines, :trip_counter, :price, :location, presence: true
  

  has_many_attached :photos

  belongs_to :user, 
  foreign_key: :user_id,
  class_name: 'User'

  has_one :car, 
  foreign_key: :listing_id,
  class_name: 'Car',
  dependent: :destroy

  has_many :bookings,
  foreign_key: :listing_id,
  class_name: 'Booking'
end
