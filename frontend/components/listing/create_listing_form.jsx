import React from 'react';

class ListingPostForm extends React.Component {
  constructor(props) {
    super(props);



  }

  update(field) {
    return e => {
      // let newState = Object.assign({}, this.props.listingFormData, { [field]: e.target.value });
      // this.setState({listingFormData: newState });

      this.props.updateState({[field]: e.target.value});
    };
  }


  formClasses() {
    if (this.props.listingDrop) {
      return 'listing-form';

    } else {
      return 'listing-form hidden-form';
    }
  }

  // componentDidUpdate(){
  //   console.log(this.form.getBoundingClientRect());
  // }

  openNextDrop() {
    this.props.openCarDrop();
    this.props.closeListingDrop();
  }

  render() {

    
    return (
      <form ref={(ele) => this.form = ele} className={this.formClasses()}>
        <label className="listings-labels">Where is your car located?
          <input className='location-input'
            type='text' value={this.props.location}
            placeholder="Enter your location"
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
        <button onClick={() => this.openNextDrop()} className="next-form" >Next</button>
      </form>
    )
  }
}

export default ListingPostForm;