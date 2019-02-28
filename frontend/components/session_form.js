import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  signupForm(){
    if (this.props.formType === 'Signup'){
      return (
        <>
          <h4 className="greeting">Let's get started</h4>
          <div className='name-label'>
            <label >Firstname</label>
            <input className='name-input' type='text' value={this.state.firstname} onChange={this.update('firstname')} />
          </div>
          <div className='name-label' >
            <label className='signup-label'>Lastname</label>
            <input className='name-input' type='text' value={this.state.lastname} onChange={this.update('lastname')} />
          </div>
        </>
      )
    }else {
      return(
        <h4 className="greeting">Welcome back</h4>
      )
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.closeModal());
  }
  
  
  render(){
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            {this.signupForm()}
            <div className='login-div'>
              <label>Email
              <input className='login-label' type='email' value={this.state.email} onChange={this.update('email')} />
              </label>
              <label>Password
              <input className='login-label' type='password' value={this.state.password} onChange={this.update('password')} />
              </label>
            </div>
            <div onClick={this.props.closeModal} className="close-x">X</div>
      
            <button className='submit-form' type="Submit"  >{this.props.formType}</button>
          </form>
          {this.props.otherForm}
        </>
        )
      }
  
  
}

export default SessionForm;