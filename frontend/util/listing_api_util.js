export const fetchListings = () => (
  $.ajax({
    method: 'get',
    url: `/api/listings`
  })
);

export const fetchListing = (id) => (
  $.ajax({
    method: 'get',
    url: `/api/listings/${id}`
  })
);

// export const createListing = ({ extras, guidelines, location, price, tripCounter: trip_counter }, { make, model, year, mpg, gas, numOfDoors: num_of_doors, numOfSeats: num_of_seats, transmission, trim, description }) => (
//   $.ajax({
//     method: 'post',
//     url: `/api/listings`,
//     data: { listing: { 
//       extras,
//       guidelines,
//       location,
//       price,
//       trip_counter
//      }, 
//     car: {
//       make,
//       model,
//       year,
//       mpg,
//       gas,
//       num_of_doors,
//       num_of_seats,
//       transmission,
//       trim,
//       description
//     }
//     }
//   })
// );

export const createListing = (formData) => (
  $.ajax({
    method: 'post',
    url: '/api/listings',
    data: formData,
    contentType: false,
    processData: false

  })
);

export const updateListing = ({ id, extras, guidelines, location, price, tripCounter: trip_counter, userId: user_id }) => (
  $.ajax({
    method: 'patch',
    url: `/api/listings/${id}`,
    data: {
      listing: {
        extras,
        guidelines,
        location,
        price,
        trip_counter,
        user_id
      }
    }
  })
);

export const deleteListing = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/listings/${id}`
  })
);
