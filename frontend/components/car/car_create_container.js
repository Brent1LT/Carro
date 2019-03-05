import {connect } from 'react-redux';
import CarPostForm from './car_create_form';
import { closeCarDrop, openPhotoDrop } from '../../actions/listing_drop_actions';

const mapStateToProps = state => {
  return ({
    carDrop: state.ui.carDrop,
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
  closeCarDrop: () => dispatch(closeCarDrop()),
  openPhotoDrop: () => dispatch(openPhotoDrop())
});

export default connect(mapStateToProps, mapDispatchToProps)(CarPostForm);