json.set! booking.id do 
  json.extract! booking, :start_date, :end_date, :user_id, :listing_id
end 