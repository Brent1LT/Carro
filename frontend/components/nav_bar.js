import React from 'react';

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
      <div className="nav-bar-links">
        <a
          className='nav-link'
          href=''
          onClick={(e) => {
            this.handleResponse(e);
            this.props.openModal("Login")
          }}
        >Login</a>

        <a
          className='nav-link'
          href=''
          onClick={(e) => {
            this.handleResponse(e);
            this.props.openModal("Signup")
          }}
        >Signup</a>
      </div>
    )
  }else {
    return (
      <div className="nav-bar-links">
        <a
          className='nav-link'
          href=''
          onClick={(e) => {
            this.handleResponse(e);
            this.props.openModal("Login")
          }}
        >Login</a>

        <a
          className='nav-link'
          href=''
          onClick={(e) => {
            this.handleResponse(e);
            this.props.openModal("Signup")
          }}
        >Signup</a>
      </div>
    )
  }
}

render(){
  return (
  <header className="parent-nav">
    <nav className="nav">
      <div className="logo">
        prettycool
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