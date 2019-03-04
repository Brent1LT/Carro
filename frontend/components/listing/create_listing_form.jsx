import React from 'react';

class ListingPostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingErrors: this.props.listingErrors,
      guidelines: this.props.listing.guidelines,
      tripCounter: 0,
      price: this.props.listing.price,
      extras: this.props.listing.extras,
      location: this.props.listing.location
    };
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {


    return (
      <form className='listing-form'>
        <label className="listings-labels">Where is your car located?
          <input className='location-input'
            type='text' value={this.state.location}
            onChange={this.update('location')} />
        </label>
        <label className='listings-labels'>What are some guidelines for your car?
          <textarea className='listings-textarea' value={this.state.guidelines}
            onChange={this.update('guidelines')}
            placeholder='Some guidelines for people using your vechicle' ></textarea>
        </label>
        <label className='listings-labels'>What is the price per day for your car?
          <input className='listings-numbers' type='number' step='1'
            value={this.state.price}
            onChange={this.update('price')} />
        </label>
        <label className='listings-labels'>Any extra information about your listing?
          <textarea className='listings-textarea' value={this.state.extras}
            onChange={this.update('extras')}
            placeholder="Any additional info you would like to add that wasn't listed" ></textarea>
        </label>
        <button className="next-form">Next</button>
      </form>
    )
  }
}

export default ListingPostForm;