class Booking < ApplicationRecord
  validates :start_date, :end_date, presence: true
  # after_initialize :is_valid?

  belongs_to :listing, 
  foreign_key: :listing_id,
  class_name: 'Listing'

  belongs_to :user,
  foreign_key: :user_id,
  class_name: 'User'

  def is_valid?
    listing = Listing.find_by_id(listing_id)
    return false if(!listing)
    current_bookings = listing.bookings
    current_bookings.each do |booking|
      return false if(self.start_date == booking.start_date || self.start_date == booking.end_date)
      return false if(self.end_date == booking.start_date || self.end_date == booking.end_date)

      if(self.start_date <= booking.end_date && (self.end_date > booking.start_date))
        return false
      elsif(self.start_date >= booking.start_date && self.end_date <= booking.end_date)
        return false
      end 
    end 

    return true
  end 

end
