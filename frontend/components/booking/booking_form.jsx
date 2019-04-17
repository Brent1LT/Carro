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
      focusedInput: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let booking = {
      start_date: this.state.startDate._d,
      end_date: this.state.endDate._d,
      listingId: this.props.listingId
    };
    debugger
    this.props.createBooking(booking);
  }

  render(){
    let moment = extendMoment(Moment);
    // debugger
    return (
      <div>
        <form className='booking-form' onSubmit={this.handleSubmit}>
          <DateRangePicker
            required={false}
            small={true}
            startDate={this.state.startDate}
            startDateId="start-date-field"
            startDatePlaceholderText="Start Date"
            endDate={this.state.endDate}
            endDateId="end-date-field"
            endDatePlaceholderText="End Date"
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            showClearDates={true}
            // isDayBlocked={isBlocked}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            hideKeyboardShortcutsPanel={true}
            startDateAreaLabel="Trip start"
            endDateAreaLabel="Trip end"
            numberOfMonths={1}
        />
        <button >Submit</button>
        </form>
      </div>
    )
  }

}

export default BookingForm;