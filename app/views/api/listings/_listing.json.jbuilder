json.listings do 
  json.set! listing.id do 
    json.extract! listing, :id, :guidelines, :user_id, :trip_counter, :price, :extras, :location
    json.photos do 
      json.array!(listing.photos) do |photo|
        json.image_url url_for(photo)
      end   
    end  
    json.owner_name "#{user.firstname} #{user.lastname}"
    json.carId car.id
  end
end 

json.cars do 
  json.set! car.id do
    json.extract! car, :id, :make, :model, :year, :mpg, :gas, :num_of_doors, :num_of_seats, :transmission, :trim, :description, :listing_id, :user_id
  end
end 

json.users do 
  json.set! user.id do 
    json.extract! user, :id, :firstname, :lastname
  end 
end 
