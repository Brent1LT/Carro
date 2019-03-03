import {connect } from 'react-redux';
import CarPostForm from './car_create_form';
import {createCar} from '../../actions/car_actions';


const mapStateToProps = state => {
  return ({
    carErrors: state.errors.cars,
    make: '',
    model: '',
    trim: '',
    description: '',
    year: '',
    mpg: '',
    numOfSeats: 0,
    numOfDoors: 0,
    transmission: 'automatic',
    gas: 'regular',

  });
};

const mapDispatchToProps = dispatch => ({
  createCar: (car) => dispatch(createCar(car))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarPostForm);