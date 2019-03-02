export const createCar = car => (
  $.ajax({
    method: 'post',
    url: `api/cars`,
    data: {car}
  })
);

export const deleteCar = id => (
  $.ajax({
    method: 'delete',
    url: `api/cars/${id}`
  })
);