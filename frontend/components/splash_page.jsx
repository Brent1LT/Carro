import React from 'react';
import {Link} from 'react-router-dom';

class SplashPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true
    };
    
    this.slide = this.slide.bind(this);
  }


  slide(value){
    
    let state = this.state;
    if(value === 'down'){
      let newCarousel = state.carousel.slice(0);
      newCarousel.unshift(newCarousel.pop());

      this.setState({
        carousel: newCarousel
      });
    }

    if(value === 'up'){
      let newCarousel = state.carousel.slice(0);
      newCarousel.push(newCarousel.shift());
      let window = document.getElementsByClassName("links");
      // debugger
      for (let i = 0; i < window.length; i++) {
        window[i].classList.add('slide');
      }
      this.setState({
        carousel: newCarousel
      });
    }
  }

  loadCarousel(){
    
    return (
      <div className='arrow-relative' >
        <div className='splash-carousel-left' onClick={() => this.slide('down')}></div>
        <div className='splash-carousel-right' onClick={() => this.slide('up')}></div>
        <div className='relative-carousel'>
          {this.state.carousel}
          
        </div>
      </div>
    )
  }

  componentDidMount(){
    this.props.fetchListings()
      .then(() => {
        let carousel = this.props.listings.map(listing => (
          <Link to={`/listings/${listing.id}`} key={`${listing.id}`} className='splash-listing-photo links' >
            <img className="splash-listing-photo"
              src={listing.photos[0].imageUrl}
            /></Link>
        ))
        this.setState({
        loading: false,
        carousel
      })});
  }

  render(){
    if (this.state.loading){
      return null;
    }
    return (
      <div className="main-splash">
        <div className="splash-image">
          <h1 className="splash-header">Way better than a rental car</h1>
          <h6 className="splash-small-header">
            Book unforgettable cars from local hosts around the world
          </h6>
        </div>
        <div className="splash-carousel">
          <span className="carousel-small-text">You might like</span>
          <div className="splash-carousel-child">{this.loadCarousel()}</div>
        </div>
        <h3 className="rental-counter">Skip the rental counter</h3>
        <div className="rental-grid">
          <div className="rental-grid-item">
            the car you want
            <p className="rental-grid-info">
              Choose from over 800 unique makes and models, from affordable
              daily drivers to rare specialty cars
            </p>
          </div>
          <div className="rental-grid-item">
            where you want it
            <p className="rental-grid-info">
              Pick up the car or get it delivered, wherever you need it, up
              to 35% less than traditional agencies
            </p>
          </div>
        </div>
        <div className="book-button-container">
        </div>
        <div className="porsche-program-parent">
          <div className="porsche-info">
            <h5 className="porsche-first-header">driving at its finest</h5>
            <h3 className="porsche-second-header">
              Discover the Porsche Host Program
            </h3>
            <p className="porsche-paragraph">
              Carro and Porsche are proud to introduce the Porsche Host
              Program, a pilot program in San Francisco and Los Angeles that
              combines curated Porsche vehicles with top Turo hosts to give
              you the complete Porsche experience.
            </p>
          </div>
        </div>
        <div className="book-n-go">
          <div className="book-n-image" />
          <div className="book-title">
            Book,unlock, and go!
            <p className="splash-book-info">
              Unlock the next level of car sharing convenience with Carro
              Go-find, book, and unlock cars on demand, right from the Carro
              app.
            </p>
            <a target='_blank' href="https://github.com/Brent1LT">
              <button className="splash-green-button">Learn more</button>
            </a>
          </div>
        </div>
        <div className="bottom-photo-container">
          <div className="carculator">
            <div className="carculator-top-text">ask the</div>
            <div className="carculator-middle-text">Carculator</div>
            <div className="carculator-ending-text">
              Find out how much your car could earn for you.
            </div>
            {/* <button className='splash-green-button estimate' >Get an Estimate</button> */}
          </div>
          <div className="good-good">
            <div className="carculator-top-text">read up on</div>
            <div className="carculator-middle-text">That good-good</div>
            <div className="carculator-ending-text">
              Peruse cool cars and good stories on the Carro blog.
            </div>
            {/* <button className='splash-green-button readup'>Check it out</button>   */}
          </div>
        </div>
        <div className="purple-footer">
          <h3 className="purple-footer1">The car that pays for itself</h3>
          <div className="purple-footer2">
            <p className="purple-footer3">
              Make a dent in your monthly car payments - on average, Carro
              hosts can cover their payments by sharing their cars just nine
              days per month.
            </p>
            <p className="purple-footer3">
              You're covered with up to $1 million in liability insurance,
              and your car is contractually protected against theft and
              physical damage. Or bring your own commerical rental insurance
              and take a bigger piece of the pie*
            </p>
            <button
              className="purple-footer-button"
              onClick={() => this.props.history.push("/listings/new")}
            >
              List your car
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
