export const fetchListings = () => (
  $.ajax({
    method: 'get',
    url: `/api/listings`
  })
);

export const fetchListing = (id) => (
  $.ajax({
    method: 'get',
    url: `/api/listing/${id}`
  })
);

export const createListing = (listing) => (
  $.ajax({
    method: 'post',
    url: `/api/listing`,
    data: { listing }
  })
);

export const updateListing = (listing) => (
  $.ajax({
    method: 'patch',
    url: `/api/listing/${listing.id}`,
    data: { listing }
  })
);

export const deleteListing = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/listing/${id}`
  })
);
