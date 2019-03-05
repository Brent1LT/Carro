import {connect } from 'react-redux';
import CarPostForm from './car_create_form';
import {createCar} from '../../actions/car_actions';


const mapStateToProps = state => {
  return ({
    carDropDown: state.ui.carDrop,
    carErrors: state.errors.cars,
    car: {
      make: '',
      model: '',
      trim: '',
      description: '',
      year: 2000,
      mpg: 0,
      numOfSeats: 2,
      numOfDoors: 4,
      transmission: 'automatic',
      gas: 'regular',
    }
  });
};

const mapDispatchToProps = dispatch => ({
  createCar: (car) => dispatch(createCar(car))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarPostForm);