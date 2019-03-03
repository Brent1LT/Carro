import React from 'react';
import ListingPostForm from './create_listing_form';



class ListingForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      listingErrors: this.props.listingErrors,
      guidelines: '',
      tripCounter: 0,
      price: 0,
      extras: '',
      location: ''
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render(){
    return (
      <div className="banner-background">
        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-dirt-road-through-wheat-field-kamiak-panoramic-images.jpg" 
          className='road-banner' />
        <h1 className='listing-banner'>LIST YOUR CAR </h1>
        <div className='parent-background'>
          <i className="fa fa-caret-right"></i>
          <div className="listings-info">
            <span className='listings-drop-title'>Your listing</span>
            {/* <ListingPostForm  /> */}
            <div>
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
                <input className='listings-inputs' type='number' step='1'
                  value={this.state.price}
                  onChange={this.update('price')} />
              </label>
              <label className='listings-labels'>Any extra information about your listing?
                <textarea className='listings-textarea' value={this.state.extras}
                  onChange={this.update('extras')}
                  placeholder="Any additional info you would like to add that wasn't listed" ></textarea>
              </label>
              <button>Next</button>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}









export default ListingForm;

// render a creatcar form and pass down create car as props nevermind it has a container