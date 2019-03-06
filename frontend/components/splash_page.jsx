import React from 'react';
import {Link} from 'react-router-dom';

class SplashPage extends React.Component {
  constructor(props){
    super(props);
    
  }

  componentDidMount(){
    this.props.fetchListings();
  }

  render(){
    if (this.props.listings === undefined || this.props.listings.length === 0){
      return null
    }
    console.log(this.props.listings);
    return(
      <div className='main-splash' >
        <div className="splash-image"  >
          <h1 className='splash-header' >Way better than a rental car</h1>
          <h6 className='splash-small-header'>Book unforgettable cars from local hosts around the world</h6>
        </div>
        <div className='splash-carousel' >
          <span className='carousel-small-text'>You might like</span>
          <div className="splash-carousel-child">
            <Link to={`/listings/${this.props.listings[0].id}`} className='splash-listing-photo' ><img className="splash-listing-photo" 
            src={this.props.listings[0].photos[0].imageUrl} 
            /></Link>

          </div>

        </div>
      </div>
    )
  }
}

export default SplashPage;