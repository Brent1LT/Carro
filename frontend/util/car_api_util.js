export const createCar = ({make, model, year, mpg, gas, numOfDoors: num_of_doors, numOfSeats: num_of_seats, transmission, trim, listingId: listing_id, userId: user_id, description}) => (
  $.ajax({
    method: 'post',
    url: `/api/cars`,
    data: {car: {
      make, 
      model, 
      year, 
      mpg, 
      gas, 
      num_of_doors,
      num_of_seats,
      transmission,
      trim,
      listing_id,
      user_id,
      description
    }
  }
  })
);

export const deleteCar = id => (
  $.ajax({
    method: 'delete',
    url: `/api/cars/${id}`
  })
);