import React from 'react';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker, SingleDatePicker } from "react-dates";
import Moment from "moment";
import { extendMoment } from "moment-range";

class BookingForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null, 
    };
    this.BAD_DATES = [];
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchBookings(this.props.listingId);
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.currentUser) {
      let booking = {
        start_date: this.state.startDate._d,
        end_date: this.state.endDate._d,
        listingId: this.props.listingId
      };
      this.props.createBooking(booking);
        
    }else{
      this.props.openModal("Sign up");
    }
  }

  renderErrors(){
    if(this.props.errors.length > 0){
      return "show-errors";
    }else{
      return "hidden-errors"; 
    }
  }

  render(){
    let bookings = Object.values(this.props.bookings).filter(el => this.props.listing.bookings.includes(el.id));
    
    const BAD_DATES = [];
    const moment = extendMoment(Moment);
    
    bookings.map(booking =>
      BAD_DATES.push(
        moment.range(
          moment(booking.startTime, "YYYY-MM-DD"),
          moment(booking.endTime, "YYYY-MM-DD")
        )
      )
    );
    
    this.BAD_DATES = BAD_DATES;
    
    const isBlocked = day =>
      BAD_DATES.filter(d => d.contains(day, "day")).length > 0;
    
    return (
      <div className='booking-container'>
        <form className='booking-form' onSubmit={this.handleSubmit}>
          <div className='range-container'>
          <DateRangePicker
            required={false}
            small={true}
            startDate={this.state.startDate}
            startDateId="start-date-field"
            startDatePlaceholderText="Trip start"
            endDate={this.state.endDate}
            endDateId="end-date-field"
            endDatePlaceholderText="Trip end"
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            showClearDates={true}
            isDayBlocked={isBlocked}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            hideKeyboardShortcutsPanel={true}
            numberOfMonths={1}
          />
          <div className={this.renderErrors()}>
            <i className="fa fa-times-circle-o" ></i>
            <span className='login-errors' >Car is not available at this time.</span>
          </div>
          </div>
          <button className='booking-button'>Go to checkout</button>
        </form>
      </div>
    )
  }

}

export default BookingForm;