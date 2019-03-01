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

export const createListing = (listing) => (
  $.ajax({
    method: 'post',
    url: `/api/listings`,
    data: { listing }
  })
);

export const updateListing = (listing) => (
  $.ajax({
    method: 'patch',
    url: `/api/listings/${listing.id}`,
    data: { listing }
  })
);

export const deleteListing = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/listings/${id}`
  })
);
