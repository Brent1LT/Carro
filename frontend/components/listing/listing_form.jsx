import React from 'react';
import ListingPostFormContainer from './create_listing_container';
import CarCreateContainer from '../car/car_create_container';
import FileUploadContainer from './file_upload_container';


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
      },
      photos: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleListingDrop(){
    if(this.props.listingDrop ){
      this.props.closeListingDrop();
    }else {
      this.props.closeCarDrop();
      this.props.closePhotoDrop();
      this.props.openListingDrop();
    }
  }


  handleCarDrop(){
    if (this.props.carDrop) {
      this.props.closeCarDrop();
    } else {
      this.props.closeListingDrop();
      this.props.closePhotoDrop();
      this.props.openCarDrop();

    }
  }

  handlePhotoDrop() {
    if (this.props.photoDrop) {
      this.props.closePhotoDrop();
    } else {
      this.props.closeListingDrop();
      this.props.closeCarDrop();
      this.props.openPhotoDrop();

    }
  }  


  arrowClasses(dropValue){
    if (dropValue){
      return "fas fa-angle-down caret rotated";
    }else {
      return "fas fa-angle-down caret";
    }
  }


  handleSubmit(e){

    if (this.props.currentUser){
      e.preventDefault();
      const formData = new FormData();
      formData.append('listing[extras]', this.state.listingFormData.extras);
      formData.append('listing[guidelines]', this.state.listingFormData.guidelines);
      formData.append('listing[location]', this.state.listingFormData.location);
      formData.append('listing[price]', this.state.listingFormData.price);
      formData.append('listing[trip_counter]', this.state.listingFormData.tripCounter);
      formData.append('car[make]', this.state.carFormData.make);
      formData.append('car[model]', this.state.carFormData.model);
      formData.append('car[year]', this.state.carFormData.year);
      formData.append('car[mpg]', this.state.carFormData.mpg);
      formData.append('car[gas]', this.state.carFormData.gas);
      formData.append('car[transmission]', this.state.carFormData.transmission);
      formData.append('car[trim]', this.state.carFormData.trim);
      formData.append('car[description]', this.state.carFormData.description);
      formData.append('car[num_of_doors]', this.state.carFormData.numOfDoors);
      formData.append('car[num_of_seats]', this.state.carFormData.numOfSeats);
      this.state.photos.photosData.forEach(photo => {
        formData.append('listing[photos][]', photo);
      });
      this.props.createListing(formData).then(payload => {
        let listing = Object.values(payload.listings);
        this.props.history.push(`/listings/${listing[0].id}`);
      });
    }else {
      this.props.openModal('Sign up');
    }
  }
  

  render(){
    return (
      <div className="banner-background">
        <div className='road-banner' >
          <h1 className='listing-banner'>LIST YOUR CAR </h1>
        </div>
        <div className='parent-background'>
          <div className="listings-info">
            <span className='listings-drop-title' onClick={() => this.handleListingDrop()}>Your listing</span>
            <i className={this.arrowClasses(this.props.listingDrop)} onClick={() => this.handleListingDrop()} ></i>
            <ListingPostFormContainer
              updateState={(data) => {
                let newState = Object.assign({}, this.state.listingFormData, data);
                this.setState({ listingFormData: newState })
              }}
              {...this.state.listingFormData} />
          </div>
          <div className='parent-car-info'>
            <div className='listings-drop-title' onClick={() => this.handleCarDrop()} >Your car</div>
            <i className={this.arrowClasses(this.props.carDrop)} onClick={() => this.handleCarDrop()}></i>
            <CarCreateContainer
              updateState={(data) => {
                let newState = Object.assign({}, this.state.carFormData, data);
                this.setState({ carFormData: newState })
              }}
              {...this.state.carFormData} />
          </div>
          <div className='parent-car-info'>
            <div className='listings-drop-title' onClick={() => this.handlePhotoDrop()} >Add photos</div>
            <i className={this.arrowClasses(this.props.photoDrop)} onClick={() => this.handlePhotoDrop()}></i>
            <FileUploadContainer 
              updateState={(data) => {
                let newState = Object.assign({}, this.state.photos, data);
                this.setState({ photos: newState })
                }}
              {...this.state.photos} />
          </div>
          <div className='finish-button-container' >
            <button className='finish-form-button' onClick={this.handleSubmit}>Finish</button>
          </div>
        </div>
      </div>
    )
  }
}


export default ListingForm;