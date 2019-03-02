import * as CarApiUtil from '../util/car_api_util';

export const RECEIVE_CAR = 'RECEIVE_CAR';
export const REMOVE_CAR = 'REMOVE_CAR';
export const RECEIVE_CAR_ERRORS = 'RECEIVE_CAR_ERRORS';

const receiveCar = car => ({
  type: RECEIVE_CAR,
  car
});

const removeCar = carId => ({
  type: REMOVE_CAR,
  carId
});

const receiveCarErrors = errors => ({
  type: RECEIVE_CAR_ERRORS,
  errors
});

export const createCar = car => dispatch => (
  CarApiUtil.createCar(car)
    .then(car => dispatch(receiveCar(car)),
    errors => dispatch(receiveCarErrors(errors.responseJSON))
    )
);

export const deleteCar = id => dispatch => (
  CarApiUtil.deleteCar(id)
    .then(() => dispatch(removeCar(id)),
    errors => dispatch(receiveCarErrors(errors.responseJSON))
    )
);

