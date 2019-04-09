import React from 'react';
import {Link} from 'react-router-dom';

const LoggedOutNav = ({handleResponse, openModal}) =>{
  return (
    <div className="nav-bar-links">
      <Link className="nav-link" to="/listings/new">
        List Your Car
      </Link>
      <a href="https://github.com/Brent1LT/Carro" target='_blank' className="nav-link">
        Learn More
      </a>

      <a
        className="nav-link"
        href=""
        onClick={e => {
          handleResponse(e);
          openModal("Log in");
        }}
      >
        Login
      </a>

      <a
        className="nav-link"
        href=""
        onClick={e => {
          handleResponse(e);
          openModal("Sign up");
        }}
      >
        Signup
      </a>
    </div>
  );
}

export default LoggedOutNav;