import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      emailError: '',
      passwordError: '',
      lastnameError: '',
      firstnameError: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  signupForm() {
    if (this.props.formType === 'Sign up') {
      return (
        <>
          <h4 className="greeting">Let's get started</h4>
          <div className="names">
            <div className='name-label'>
              <label className='error-parent session-label' >Firstname
                {this.showIcon('firstname')}
              </label>
              <input className={'name-input' + this.state.firstnameError} 
                type='text'  
                value={this.state.firstname} 
                onChange={this.update('firstname')} 
                placeholder='Firstname' />
            </div>
            <div className='name-label' >
              <label className='error-parent session-label'>Lastname
                {this.showIcon('lastname')}
              </label>
              <input className={'name-input' + this.state.lastnameError} 
                type='text' 
                value={this.state.lastname} 
                onChange={this.update('lastname')}
                placeholder='Lastname' />
            </div>
          </div>
        </>
      )
    } else {
      return (
        <h4 className="greeting">Welcome back</h4>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.closeModal());
  };

  demoUser() {
    if (this.props.formType === 'Log in') {
      return (
        <button className="demo-user"
          onClick={() => this.loginDemo()} >
          Demo User!
        </button>
      );
    };
  };

  loginDemo() {
    this.setState({ firstname: 'demo', lastname: 'login', email: 'demo@email.com', password: 'password' },
      () => {
        let user = this.state;
        this.props.processForm(user);
        this.props.closeModal();
      })
  }


  renderLoginErrors() {
    if (this.props.formType === 'Log in' && this.props.errors.length > 0) {
      return (
        <div >
          <i className="fa fa-times-circle-o" ></i>
          <span className='login-errors' >Please check your email and password.</span>
        </div>
      )
    }
  }

  renderSignupErrors() {
    if (this.props.formType === 'Sign up' && this.props.errors.length > 0) {
      return (
        <span className='signup-errors'>Please enter atleast 8 characters</span>
      )
    }
  }

  showIcon(value){
    if (this.props.errors.length > 0 && this.state[value] === '') {
      return(
        <i className="fa fa-times-circle-o input-error" ></i>
      )
    }
  }

  renderErrors() {
    if (this.props.errors.length > 0 && this.state['email'] === '') {
      this.state.emailError = ' error-box'
    }else{
      this.state.emailError = ''
    }
    if (this.props.errors.length > 0 && this.state['password'] === '') {
      this.state.passwordError = ' error-box'
    }else{
      this.state.passwordError = ''
    }
    if (this.props.errors.length > 0 && this.state['firstname'] === '') {
      this.state.firstnameError = ' error-box'
    }else {
      this.state.firstnameError = ''
    }
    if (this.props.errors.length > 0 && this.state['lastname'] === '') {
      this.state.lastnameError = ' error-box'
    }else {
      this.state.lastnameError = ''
    }
  }


  render() {
    this.renderErrors()
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {this.signupForm()}
          <div className='login-div'>
            <label className='error-parent session-label'>Email
              {this.showIcon('email')}
              <input className={'login-label' + this.state.emailError} 
                type='email' 
                value={this.state.email} 
                onChange={this.update('email')} 
                placeholder='Email'
                />
            </label>
            <label className='error-parent session-label'>Password
              {this.showIcon('password')}
              <input className={'login-label' + this.state.passwordError} 
                type='password' 
                value={this.state.password} 
                onChange={this.update('password')} 
                placeholder='Password' />
            </label>
          </div>
          {this.renderSignupErrors()}
          <div onClick={this.props.closeModal} className="close-x">X</div>

          <button className='submit-form' type="Submit"  >{this.props.formType}</button>
        </form>
        {this.demoUser()}
        <span>{this.props.otherForm}</span>

        {this.renderLoginErrors()}
      </>
    )
  }


}

export default SessionForm;