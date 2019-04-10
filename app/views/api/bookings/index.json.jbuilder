@booking.each do |booking|
  json.partial! 'booking', booking: booking
end 