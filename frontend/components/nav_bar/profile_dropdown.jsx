import React from 'react';


class ProfileDropdown extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      dropdown: false
    };
  }

  releaseDropdown(){
    if(this.state.dropdown){
      return (
        <div className='drop-down d'>
          <div className='arrow'></div>
          <div href='' className='drop-down-link' >Find a car</div>
          <div href='' className='drop-down-link' >Profile</div>
          <div href='' className='drop-down-link' onClick={() => this.props.logout()} >Log out</div>
          
        </div>
      )
    }
  }

  render(){
    return (
    <div 
      onMouseEnter={() => this.setState({dropdown: true})}
      onMouseLeave={() => this.setState({dropdown: false})}
      className="profile-image-container"
      >
      <i className="fa fa-user-circle"></i>
      {this.releaseDropdown()}
    </div>
    )
  }
}

export default ProfileDropdown;