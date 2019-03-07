@listings.each do |listing|
  json.listings do 
    json.set! listing.id do 
      json.extract! listing, :id, :price, :trip_counter
        json.photos do 
          json.array!(listing.photos) do |photo|
            json.image_url url_for(photo)
          end   
        end  
    end
  end 

  car = listing.car

  json.cars do 
    json.set! car.id do
      json.extract! car, :id, :make, :model, :year
    end
  end 
end 