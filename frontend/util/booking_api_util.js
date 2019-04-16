export const fetchBookings = () => (
  $.ajax({
    method: 'get',
    url: `/api/bookings`
  })
);

export const createBooking = (booking) => (
  $.ajax({
    method: 'post',
    url: `/api/listings/${booking.listingId}/bookings`,
    data: booking
  })
);

export const deleteBooking = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/bookings/${id}`
  })
);