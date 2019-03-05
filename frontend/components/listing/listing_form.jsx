import React from 'react';
import ListingPostFormContainer from './create_listing_container';
import CarCreateContainer from '../car/car_create_container';



class ListingForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      listingFormData: {
          guidelines: '',
          tripCounter: 0,
          price: 0,
          extras: '',
          location: ''
        },
      carFormData: {
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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleListingDrop(){
    if(this.props.listingDrop ){
      this.props.closeListingDrop();
    }else {
      this.props.closeCarDrop();
      this.props.openListingDrop();
    }
  }


  handleCarDrop(){
    if (this.props.carDrop) {
      this.props.closeCarDrop();
    } else {
      this.props.closeListingDrop();
      this.props.openCarDrop();

    }
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.createListing(this.state.listingFormData, this.state.carFormData);
  }

  render(){
    return (
      <div className="banner-background">
        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-dirt-road-through-wheat-field-kamiak-panoramic-images.jpg" 
          className='road-banner' />
        <h1 className='listing-banner'>LIST YOUR CAR </h1>
        <div className='parent-background'>
          <div className="listings-info">
            <span className='listings-drop-title' onClick={() => this.handleListingDrop()}>Your listing</span>
            <i className="fas fa-angle-down listing-caret" onClick={() => this.handleListingDrop()} ></i>
            <ListingPostFormContainer
              updateState={(data) => {
                let newState = Object.assign({}, this.state.listingFormData, data);
                this.setState({ listingFormData: newState })
              }}
              {...this.state.listingFormData} />
          </div>
          <div className='parent-car-info'>
            <div className='listings-drop-title' onClick={() => this.handleCarDrop()} >Your car</div>
            <i className="fas fa-angle-down listing-caret" onClick={() => this.handleCarDrop()}></i>
            <CarCreateContainer
              updateState={(data) => {
                let newState = Object.assign({}, this.state.carFormData, data);
                this.setState({ carFormData: newState })
              }}
              {...this.state.carFormData} />
          </div>
          <div className='parent-car-info'>
            <div className='listings-drop-title' >Listing photos</div>
            <i className="fas fa-angle-down listing-caret" onClick={() => this.handleCarDrop()}></i>

          </div>
        </div>
        <button  onClick={this.handleSubmit}>Finish</button>
      </div>
    )
  }
}


{/* <div>
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
</div> */}








export default ListingForm;

// render a creatcar form and pass down create car as props nevermind it has a container