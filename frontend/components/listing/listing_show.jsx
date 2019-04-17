import React from 'react';
import {Link} from 'react-router-dom';
import BookingFormContainer from '../booking/booking_form_container';

class ListingShow extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentIndex: 0,
      startDate: null,
      endDate: null,
      focusedInput: null
    };

    this.handleDelete = this.handleDelete.bind(this);
  }


  profilePicture(){
    if(this.props.listing.profilePicture){
      return <img className='profile-circle-opt' src={this.props.listing.profilePicture} />
    }else{
      return <div className='profile-circle' ></div>
    }
  }

  carouselImage(){
    return (
      <img className='carousel-image' src={this.props.listing.photos[this.state.currentIndex].imageUrl} />
    )
  }

  componentDidUpdate(preProps){
    if (preProps.match.params.listingId !== this.props.match.params.listingId){
      this.props.fetchListing(this.props.match.params.listingId);
    }
  }


  componentDidMount(){
    this.props.fetchListing(parseInt(this.props.match.params.listingId));
  }

  previousImage(){
    if(this.state.currentIndex === 0){
      this.setState({currentIndex: (this.props.listing.photos.length - 1)});
    }else{
      this.setState({currentIndex: (this.state.currentIndex - 1)});
    }
  }

  nextImage(){
    if(this.state.currentIndex === (this.props.listing.photos.length -1)){
      this.setState({currentIndex: 0});
    }else {
      this.setState({currentIndex: (this.state.currentIndex + 1)});
    }
  }

  handleExtras(){
    if (this.props.listing.extras){
      return (
        <>
          <div className='heading-tags' >extras</div>
          <div className='show-text-boxes' >{this.props.listing.extras}</div>
        </>
      )
    }
  }

  handleDelete(listing){
    this.props.deleteListing(listing.id)
      .then(() => this.props.history.push(`/`));
  }

  authComponents(){
    let listing = this.props.listing;
    let currUser = this.props.currUser;
    if(currUser === listing.userId){
      return (
        <div>
          <Link to={`/listings/${listing.id}/edit`} >
            <button className='update-listing-button'>Update Listing</button>
          </Link>
          <button onClick={() => this.handleDelete(listing)} className='delete-listing-button'>Delete Listing</button>
        </div>
      )
    }else return null;
  }

  render(){
    if(!this.props.listing || !this.props.car){
      return null;
    }
    let listing = this.props.listing;
    let car = this.props.car;
    return (
      <div className='listing-show-container'>
        <div className='carousel-container' >
          {this.carouselImage()}
          <div onClick={() => this.previousImage()} className='left-change' ></div>
          <div onClick={() => this.nextImage()} className='right-change' ></div>
          <div className='carousel-counter' >{`${this.state.currentIndex + 1} of ${this.props.listing.photos.length}`}</div>
        </div>
        <div className='listing-details'>
          <div className='car-show-details' >
            <div className='heading-tags'>THE CAR</div>
            <div className='ownername'>{`${listing.ownerName}'s`}
              <div className='car-make-model'>{`${car.make} ${car.model}`}
                <span className='car-year'>{car.year}</span>
              </div>
              <div>
                <i className="fa fa-star review-stars"></i>
                <i className="fa fa-star review-stars"></i>
                <i className="fa fa-star review-stars"></i>
                <i className="fa fa-star review-stars"></i>
                <i className="fa fa-star review-stars"></i>
                <span > {` ${listing.tripCounter} trips`}</span>
              </div>
              <div className='parent-icons-div'>
                <div className='icons-grid'>
                  <div className='mpg-icon'>
                    <h5 className='icons-name'>{`${car.mpg} MPG`}</h5>
                  </div>
                  <div className='gas-icon'>
                    <span className='icons-name'>{`Gas(${car.gas})`}</span>
                  </div>
                  <div className='door-icon'>
                    <div className='icons-name'>{`${car.numOfDoors} Doors`}</div>
                  </div>
                  <div className='seat-icon'>
                    <div className='icons-name'>{`${car.numOfSeats} Seats`}</div>
                  </div>
                </div>
              </div>
            </div>
          <div className='heading-tags' >Description</div>
          <div className='show-text-boxes' >{car.description}</div>
          <div className='heading-tags'>Guidelines</div>
          <div className='show-text-boxes' >{listing.guidelines}</div>
          {this.handleExtras()}
          <div className='sidebar'>
            <div className='price-per-day'>
              <div className='inner-dollar'>$</div>
              <div className='inner-price'>{listing.price}</div>
              <div className='inner-day'>per day</div>
            </div>
            <BookingFormContainer listing={this.props.listing} /> 
            <div className='mileage-section'>
              <div className='mileage'>
                <div>Distance included</div>
                <div>750 mi</div>
              </div>
              <div className='random-mileage' >{Math.random().toFixed(2)}/mi fee for additional miles driven</div>
            </div> 
            <div className='insurance-provider'>insurance provided via</div> 
            <div className='liberty'>Liberty Mutual</div> 
            <div className='show-user-info'>
              <div className='owner-box'>
                <div className='owned-by' >OWNED BY</div>
                <div className='side-ownername'>{listing.ownerName}</div>
                <div className='star-section' >
                  <i className="fa fa-star review-stars"></i>
                  <i className="fa fa-star review-stars"></i>
                  <i className="fa fa-star review-stars"></i>
                  <i className="fa fa-star review-stars"></i>
                  <i className="fa fa-star review-stars"></i>
                </div>
              </div>
              {this.profilePicture()}
            </div>
            <div className='response-rate'>
              <div>Response rate</div>
              <div>100 %</div>
            </div>
            {this.authComponents()}
          </div>
          </div>
        </div>       
      </div>
    )
  }
}


export default ListingShow;
