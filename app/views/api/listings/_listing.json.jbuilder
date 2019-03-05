json.set! listing.id do 
  json.extract! listing, :id, :guidelines, :user_id, :trip_counter, :price, :extras, :location
    json.photos do 
    json.array!(listing.photos) do |photo|
      json.image_url url_for(photo)
    end   
  end  
end


