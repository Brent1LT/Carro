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
          <div href='' className='drop-down-link logout' onClick={() => this.props.logout()} >Log out</div>
        </div>
      )
    }
  }

  profilePicture(){
    let user = this.props.users[this.props.currentUserId];
    if (user.profilePicture){
      return <img src={user.profilePicture} className='nav-profile-pic' />
    }else {
      return <i className="fa fa-user-circle"></i>
    }
  }

  render(){
    return (
    <div 
      onMouseEnter={() => this.setState({dropdown: true})}
      onMouseLeave={() => this.setState({dropdown: false})}
      className="profile-image-container"
      >
      {this.profilePicture()}
      {this.releaseDropdown()}
    </div>
    )
  }
}

export default ProfileDropdown;