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
      photos: {
        photoUrl: []
      }
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
        </div>
        <button  onClick={this.handleSubmit}>Finish</button>
      </div>
    )
  }
}




export default ListingForm;

// render a creatcar form and pass down create car as props nevermind it has a container