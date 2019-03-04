import React from 'react';


class CarPostForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      carErrors: this.props.carErrors,
      make: this.props.car.make,
      trim: this.props.car.trim,
      year: this.props.car.year,
      numOfSeats: 0,
      numOfDoors: 0,
      mpg: this.props.car.mpg,
      gas: this.props.car.gas,
      transmission: this.props.car.transmission,
      description: this.props.car.description
    };
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render(){
    return (
      <form className='car-form'>
        <label className="listings-labels">What is the make of your car?
          <input type="text" className='listings-inputs'
            value={this.state.make} onChange={this.update('make')} />
        </label>
        <label className="listings-labels">What is the model of your car?
          <input type="text" className='listings-inputs'
            value={this.state.model} onChange={this.update('model')} />
        </label>
        <label className="listings-labels">What is the trim of your car?<span className='optional-span'>optional</span>
          <input type="text" className='listings-inputs'
            value={this.state.trim} onChange={this.update('trim')} />
        </label>
        <label className='listings-labels'>What is the year of your car?
          <input className='listings-numbers' type='number' step='1'
            value={this.state.year}
            onChange={this.update('year')} />
        </label>
        <label className='listings-labels'>What is your car's average mpg?
          <input className='listings-numbers' type='number' step='1'
            value={this.state.mpg}
            onChange={this.update('mpg')} />
        </label>
        <label className='listings-labels'>How many seats does your car have?
          <input className='listings-numbers' type='number' step='1'
            value={this.state.numOfSeats}
            onChange={this.update('numOfSeats')} />
        </label>
        <label className='listings-labels'>How many doors does your car have?
          <input className='listings-numbers' type='number' step='1'
            value={this.state.numOfDoors}
            onChange={this.update('numOfDoors')} />
        </label>
        <label className='transmission-label'>Transmission</label>
        <div className='transmission-input'>
          <input className='listing-radios1' type="radio" name='transmission' value='manual' onChange={this.update('transmission')}  checked/>Manual
          <input className='listing-radios2' type="radio" name='transmission' value='automatic' onChange={this.update('transmission')}  />Automatic
        </div>
        <label className='gas-label'>Gas</label>
        <div className='gas-input'>
            <input className='listing-radios1' type="radio" name='gas' value='regular' onChange={this.update('gas')}  checked/>Regular
            <input className='listing-radios2' type="radio" name='gas' value='premium' onChange={this.update('gas')}  />Premium
        </div>
        <button className="next-form">Next</button>
        </form>
    )
  }
}

export default CarPostForm;