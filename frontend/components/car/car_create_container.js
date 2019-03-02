import {connect } from 'react-redux';
import CarCreateForm from './car_create_form';
import {createCar} from '../../actions/car_actions';


const mapStateToProps = state => {
  let car = Object.values(state.car);
  return ({
    car
  });
};

const mapDispatchToProps = dispatch => ({
  createCar: (car) => dispatch(createCar(car))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarCreateForm);