import React from 'react';
import {Link} from 'react-router-dom';

class SplashPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.props.fetchListings()
      .then(() => this.setState({
        loading: false
      }));
  }

  render(){
    if (this.state.loading){
      return null;
    }
    let {listings} = this.props;
    return(
      <div className='main-splash' >
        <div className="splash-image"  >
          <h1 className='splash-header' >Way better than a rental car</h1>
          <h6 className='splash-small-header'>Book unforgettable cars from local hosts around the world</h6>
        </div>
        <div className='splash-carousel' >
          <span className='carousel-small-text'>You might like</span>
          <div className="splash-carousel-child">
            <Link to={`/listings/${listings[0].id}`} className='splash-listing-photo' ><img className="splash-listing-photo" 
            src={listings[0].photos[0].imageUrl} 
            /></Link>

            <Link to={`/listings/${listings[1].id}`} className='splash-listing-photo' ><img className="splash-listing-photo" 
            src={listings[1].photos[0].imageUrl} 
            /></Link>

          </div>

        </div>

        <h3 className='rental-counter'>Skip the rental counter</h3>
        <div className='rental-grid'>
          <div className='rental-grid-item'>the car you want
            <p className='rental-grid-info'>Choose from over 800 unique makes and models, from affordable daily drivers to rare specialty cars
            </p>
          </div>
          <div className='rental-grid-item'>where you want it
            <p className='rental-grid-info'>Pick up the car or get it delivered, wherever you need it, up to 35% less than traditional agencies</p>
          </div>
        </div>
        <div className='book-button-container'>
          <button className='book-button' >Book the perfect car</button>
        </div>
      </div>
    )
  }
}

export default SplashPage;