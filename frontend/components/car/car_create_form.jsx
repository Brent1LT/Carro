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
        <label className="listings-labels">Make
          <input type="text" className='listings-inputs'
            value={this.state.make} onChange={this.update('make')} />
        </label>
        <label className="listings-labels">Model
          <input type="text" className='listings-inputs'
            value={this.state.model} onChange={this.update('model')} />
        </label>
        <label className="listings-labels">Trim
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
        <div className='transmission-input'>Transmission
          <input type="radio" value='automatic' onChange={this.update('transmission')}  checked/>Automatic
          <input type="radio" value='manual' onChange={this.update('transmission')}  />Manual
        </div>
        <div className='gas-input'>Gas
          <input type="radio" value='regular' onChange={this.update('gas')}  checked/>Regular
          <input type="radio" value='premium' onChange={this.update('gas')}  />Premium
        </div>
        </form>
    )
  }
}

export default CarPostForm;