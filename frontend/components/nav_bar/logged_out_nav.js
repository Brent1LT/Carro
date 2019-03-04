import React from 'react';
import {Link} from 'react-router-dom';

const LoggedOutNav = ({handleResponse, openModal}) =>{
  return(
    <div className="nav-bar-links">
      <Link className='nav-link' to="/listings/new" >List Your Car</Link>
      <label className="nav-link" >Learn More</label>

      <a
        className='nav-link'
        href=''
        onClick={(e) => {
          handleResponse(e);
          openModal("Log in")
        }}
      >Login</a>

        <a
          className='nav-link'
          href=''
          onClick={(e) => {
            handleResponse(e);
            openModal("Sign up")
          }}
        >Signup</a>
    </div >
  )
}

export default LoggedOutNav;