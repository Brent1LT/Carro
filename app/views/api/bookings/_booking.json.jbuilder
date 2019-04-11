json.set! booking.id do 
  json.extract! booking, :start_time, :end_time, :user_id, :listing_id
end 