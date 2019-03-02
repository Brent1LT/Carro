json.set! @car.id do
  json.extract! @car, :id, :make, :model, :year, :mpg, :gas, :num_of_doors, :num_of_seats, :transmission, :trim, :description, :listing_id, :user_id
end 