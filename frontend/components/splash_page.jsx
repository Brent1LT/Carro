import React from 'react';

class SplashPage extends React.Component {
  constructor(props){
    super(props);
    
  }

  componentDidMount(){
    this.props.fetchListings();
  }

  render(){
    if (this.props.listings.length === 0){
      return (
        <>
        </>
      );
    }
    return(
      <div className='main-splash' >
        <img className="splash-image" src="https://pictures.topspeed.com/IMG/crop/201804/2019-subaru-forester_1600x0w.jpg" />
        <h1 className='splash-header' >Way better than a rental car</h1>
        <h6 className='splash-small-header'>Book unforgettable cars from local hosts around the world</h6>
        <div className='splash-caruosel' >
          <div className="splash-carousel-child">
          <img className="splash-listing-photo" src={this.props.listings[0].photos.imageUrl} />

          </div>

        </div>
      </div>
    )
  }
}

export default SplashPage;