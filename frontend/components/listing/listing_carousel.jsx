import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class ListingCarousel extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <Carousel>
        {this.props.pictures.map(photo => (
          <div className='test-carousel'>
            <img src={photo.photoUrl}/>
          </div>
        ))}
      </Carousel>
    )
  }
}

export default ListingCarousel;