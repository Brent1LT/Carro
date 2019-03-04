import React from 'react';
import ListingPostFormContainer from './create_listing_container';
import CarCreateContainer from '../car/car_create_container';



class ListingForm extends React.Component{
  constructor(props){
    super(props);

    // this.handleDrop = this.handleDrop.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // update(field){
  //   if (this.state[field] === false){
  //     this.setState({[field]: true});
  //     this.handleDrop();
  //   }else {
  //     this.setState({[field]: false});
  //     this.handleDrop();
  //   }
  // }

  handleListingDrop(){
    if(this.props.listingDrop ){
      this.props.closeListingDrop();
    }else {
      this.props.closeCarDrop();
      this.props.openListingDrop();
    }
  }

  checkListingDrop(){
    if (this.props.listingDrop){
      return (
        <ListingPostFormContainer  closeListingDrop={this.props.closeListingDrop} />
      )
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

  checkCarDrop(){
    if (this.props.carDrop) {
      return (
        <CarCreateContainer />
      )
    } 
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
            {this.checkListingDrop()}
          </div>
          <div className='parent-car-info'>
            <div className='listings-drop-title' >Listing photos</div>
            <i className="fas fa-angle-down listing-caret" onClick={() => this.handleCarDrop()}></i>

          </div>
          <div className='parent-car-info'>
            <div className='listings-drop-title' onClick={() => this.handleCarDrop()} >Your car</div>
            <i className="fas fa-angle-down listing-caret" onClick={() => this.handleCarDrop()}></i>
            {this.checkCarDrop()}
          </div>
        </div>
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