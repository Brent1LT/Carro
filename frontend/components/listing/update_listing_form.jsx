import React from 'react';

class UpdateListingForm extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {

    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchListing(this.props.match.params.listingId)
      .then(action => {
        let listing = Object.values(action.listings)[0];
        this.setState({
          location: listing.location,
          guidelines: listing.guidelines,
          price: listing.price,
          extras: listing.extras,
          id: listing.id
        });
      });
  }

  arrowClasses(dropValue) {
    if (dropValue) {
      return "fas fa-angle-down caret rotated";
    } else {
      return "fas fa-angle-down caret";
    }
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  formClasses() {
    if (this.props.listingDrop) {
      return 'listing-form';

    } else {
      return 'listing-form hidden-form';
    }
  }

  handleListingDrop() {
    if (this.props.listingDrop) {
      this.props.closeListingDrop();
    } else {
      this.props.openListingDrop();
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateListing(this.state).then((payload) => {
      let listing = Object.values(payload.listings);
      this.props.history.push(`/listings/${listing[0].id}`);
    });
  }

  render(){
    if (!this.props.listing){
      return null;
    }
    return (
      <div>
        <div className='road-banner' >
          <h1 className='listing-banner'>UPDATE YOUR CAR </h1>
        </div>
        <div className='parent-background'>
          <div className="listings-info">
            <span className='listings-drop-title' onClick={() => this.handleListingDrop()}>Your listing</span>
            <i className={this.arrowClasses(this.props.listingDrop)} onClick={() => this.handleListingDrop()} ></i>
            
            <div ref={(ele) => this.form = ele} className={this.formClasses()}
               >
              <label className="listings-labels">Where is your car located?
                <input className='location-input'
                  type='text' placeholder={this.state.location}
                  onChange={this.update('location')} />
              </label>
              <label className='listings-labels'>What are some guidelines for your car?
                  <textarea className='listings-textarea' placeholder={this.state.guidelines}
                  onChange={this.update('guidelines')}
                   ></textarea>
              </label>
              <label className='listings-labels'>What is the price per day for your car?
                <input className='listings-numbers' type='number' step='1' min='0'
                  placeholder={this.state.price}
                  onChange={this.update('price')} />
              </label>
              <label className='listings-labels'>Any extra information about your listing?
                <textarea className='listings-textarea' placeholder={this.state.extras}
                  onChange={this.update('extras')}
                   ></textarea>
              </label>
            </div>
            
            <button onClick={this.handleSubmit} className='finish-form-button'>Finish</button>

          </div>
      </div>
    </div>
    )
  }
}

export default UpdateListingForm;