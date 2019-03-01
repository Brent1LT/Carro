import React from 'react';
import ProfileDropdownContainer from '../logout_container';

const LoggedInNav = () => {
  return (
    <div className="nav-user-profile">
      <a href="" className="nav-user-links">List Your Car</a>
      <a href="" className="nav-user-links">Trips</a>
      <a href="" className="nav-user-links">Messages</a>
      <a href="" className="nav-user-links">Learn More</a>
      <ProfileDropdownContainer />
    </div>
  )
}

export default LoggedInNav;