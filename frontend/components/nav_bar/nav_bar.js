import React from 'react';
import LoggedInNav from './logged_in_nav';
import LoggedOutNav from './logged_out_nav';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.handleResponse = this.handleResponse.bind(this);
  }

handleResponse(e){
  e.preventDefault();
}

showLinks(){
  
  if(this.props.loggedIn){
    return(
      <LoggedInNav />
    )
  }else {
    return (
      <LoggedOutNav 
        openModal={this.props.openModal}
        handleResponse={this.handleResponse}  />
    )
  }
}

render(){
  return (
  <header className="parent-nav">
    <nav className="nav">
      <div className="logo">
        <Link className='logo' to='/'>
            <div className='logo'></div>
        </Link>
          
      </div>
    {this.showLinks()}  
    </nav>
  </header>
  )
}
}

export default NavBar;