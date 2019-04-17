export const fetchBookings = (listing_id) => (
  $.ajax({
    method: 'get',
    url: `/api/bookings`,
    data: {
      listing_id
    }
  })
);

export const createBooking = (booking) => (
  $.ajax({
    method: 'post',
    url: `/api/listings/${booking.listingId}/bookings`,
    data: {
      booking: {
        start_date: booking.start_date,
        end_date: booking.end_date
      }
    }
  })
);

export const deleteBooking = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/bookings/${id}`
  })
);