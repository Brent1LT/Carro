import React from 'react';



class ListingForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      listingErrors: this.props.listingErrors,
      guidelines: '',
      tripCounter: 0,
      price: 0,
      extras: '',
      location: ''
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render(){
    return (
      <div className="banner-background">
        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-dirt-road-through-wheat-field-kamiak-panoramic-images.jpg" 
          className='road-banner' />
        <h1 className='listing-banner'>LIST YOUR CAR </h1>
        <div className='parent-background'>
          <div className="listings-info">Your listing
            <label className="test">Where is your car located?
              <input type='text' value={this.state.location} onChange={this.update('location')} />
            </label>
            <label className='test'>What are some guidelines for your car?
              <textarea value={this.state.guidelines} onChange={this.update('guidelines')}
                className='guidelines'
                placeholder='Some guidelines for people using your vechicle' ></textarea>
            </label>
            <label>What is the price per day for your car?
              <input type='number' step='1' value={this.state.price} onChange={this.update('price')} />
            </label>
            <label>Any extra information about your listing?
              <textarea value={this.state.extras} onChange={this.update('extras')}
                placeholder="Any additional info you would like to add that wasn't listed" ></textarea>
            </label>
          </div>
        </div>
      </div>
    )
  }
}









export default ListingForm;

// render a creatcar form and pass down create car as props nevermind it has a container