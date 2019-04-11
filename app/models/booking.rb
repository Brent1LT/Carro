class Booking < ApplicationRecord
  validates :start_time, :end_time, presence: true
  # after_initialize :is_valid?

  belongs_to :listing, 
  foreign_key: :listing_id,
  class_name: 'Listing'

  belongs_to :user,
  foreign_key: :user_id,
  class_name: 'User'

  def is_valid?(listing_id)
    listing = Listing.find_by_id(listing_id)
    return false if(!listing)
    current_bookings = listing.bookings
    current_bookings.each do |booking|
      return false if(self.start_time == booking.start_time || self.start_time == booking.end_time)
      return false if(self.end_time == booking.start_time || self.end_time == booking.end_time)

      if(self.start_time <= booking.end_time && (self.end_time > booking.start_time))
        return false
      elsif(self.start_time >= booking.start_time && self.end_time <= booking.end_time)
        return false
      end 
    end 

    return true
  end 

end
