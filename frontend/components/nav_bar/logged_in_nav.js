import React from 'react';
import ProfileDropdownContainer from '../logout_container';
import {Link} from 'react-router-dom';

const LoggedInNav = () => {
  return (
    <div className="nav-user-profile">
      <Link to={`/listings/new`} className="nav-user-links">
        List Your Car
      </Link>
      {/* <a href="" className="nav-user-links">
        Trips
      </a> */}
      {/* <a href="" className="nav-user-links">
        Messages
      </a> */}
      <a href="https://github.com/Brent1LT/Carro" target='_blank' className="nav-user-links">
        Learn More
      </a>
      <ProfileDropdownContainer />
    </div>
  );
}

export default LoggedInNav;