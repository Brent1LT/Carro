json.set! listing.id do 
  json.extract! listing, :id, :guidelines, :user_id, :trip_counter, :price, :extras, :location
end