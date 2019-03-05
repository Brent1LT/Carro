import React from 'react';

class ListingPostForm extends React.Component {
  constructor(props) {
    super(props);

    // this.state =  {
    //   guidelines: this.props.listing.guidelines,
    //   tripCounter: this.props.listing.tripCounter,
    //   price: this.props.listing.price,
    //   extras: this.props.listing.extras,
    //   location: this.props.listing.location
    // };

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      // let newState = Object.assign({}, this.props.listingFormData, { [field]: e.target.value });
      // this.setState({listingFormData: newState });

      this.props.updateState({[field]: e.target.value});
    };
  }

  // handleSubmit(e){
  //   e.preventDefault();
    // debugger
    // let thing = Object.assign({}, this.state);
    // listing = Object.assign({[userId]: this.props.userId}, listing);
  //   this.props.createListing(Object.assign({}, this.state, {userId: this.props.userId})).then(() => this.props.closeListingDrop());
  // }

  render() {

    
    return (
      <form className='listing-form'>
        <label className="listings-labels">Where is your car located?
          <input className='location-input'
            type='text' value={this.props.location}
            onChange={this.update('location')} />
        </label>
        <label className='listings-labels'>What are some guidelines for your car?
          <textarea className='listings-textarea' value={this.props.guidelines}
            onChange={this.update('guidelines')}
            placeholder='Some guidelines for people using your vechicle' ></textarea>
        </label>
        <label className='listings-labels'>What is the price per day for your car?
          <input className='listings-numbers' type='number' step='1' min='0'
            value={this.props.price}
            onChange={this.update('price')} />
        </label>
        <label className='listings-labels'>Any extra information about your listing?
          <textarea className='listings-textarea' value={this.props.extras}
            onChange={this.update('extras')}
            placeholder="Any additional info you would like to add that wasn't listed" ></textarea>
        </label>
        <button className="next-form" >Next</button>
      </form>
    )
  }
}

export default ListingPostForm;