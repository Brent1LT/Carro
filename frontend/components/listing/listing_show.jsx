import React from 'react';

class ListingShow extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentIndex: 0,
      translateValue: 0
    };
  }

  // setupCarousel(){
  //   this.setState({ photoCarousel: this.props.listing.photos });
  // }

  // componentDidUpdate(){
  //   if(this.props.listing !== undefined && !this.state.photoCarousel){
  //     this.setupCarousel();
  //   }
  // }
  carouselImage(){
    return (
      <img className='carousel-image' src={this.props.listing.photos[this.state.currentIndex].imageUrl} />
    )
  }

  componentDidMount(){
    this.props.fetchListing(parseInt(this.props.match.params.listingId));
  }

  previousImage(){
    if(this.state.currentIndex === 0){
      return null;
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

  render(){
    if(this.props.listing === undefined){
      return null;
    }
    return (
      <div className='listing-show-container'>
        <div className='carousel-container' >
          {this.carouselImage()}
          <button onClick={() => this.previousImage()} className='left-change' >left icon here</button>
          <button onClick={() => this.nextImage()} className='right-change' >right icon here</button>
          <div className='carousel-counter' >{`${this.state.currentIndex + 1} of ${this.props.listing.photos.length}`}</div>
        </div>

      </div>
    )
  }
}


export default ListingShow;