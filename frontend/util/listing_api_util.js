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

export const createListing = ({ extras, guidelines, location, price, tripCounter: trip_counter, userId: user_id }) => (
  $.ajax({
    method: 'post',
    url: `/api/listings`,
    data: { listing: { 
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

export const updateListing = ({ extras, guidelines, location, price, tripCounter: trip_counter, userId: user_id }) => (
  $.ajax({
    method: 'patch',
    url: `/api/listings/${listing.id}`,
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
