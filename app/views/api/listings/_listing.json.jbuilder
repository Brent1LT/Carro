json.set! listing.id do 
  json.extract! listing, :id, :description, :user_id, :trip_counter, :price, :car_id, :extras, :location
end