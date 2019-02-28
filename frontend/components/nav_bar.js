import React from 'react';
import LoggedInNav from './nav_bar/logged_in_nav';
import LoggedOutNav from './nav_bar/logged_out_nav';
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
          <img className="logo" src="data:image/png;base64,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"
          />
      </div>
    {this.showLinks()}  
    </nav>
  </header>
  )
}
}

export default NavBar;

{/* <a href='' onClick={(e) => { e.preventDefault(); props.openModal("Signup") }} >signup</a> */}

// const mdp = dispatch => ({
//   openModal: (modal) => dispatch(openModal(modal))
// })