import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: ''
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
              <input className={'name-input' + this.renderErrors('firstname')} 
                type='text'  
                value={this.state.firstname} 
                onChange={this.update('firstname')} 
                placeholder='Firstname' />
            </div>
            <div className='name-label' >
              <label className='error-parent session-label'>Lastname
                {this.showIcon('lastname')}
              </label>
              <input className={'name-input' + this.renderErrors('lastname')} 
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
    let user = Object.assign({}, this.state );
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
    this.setState({ firstname: 'demo', lastname: 'login', email: 'demo@email.com', password: '12345678' },
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

  renderErrors(field) {
    if (this.props.errors.length > 0 && this.state[field] === '') {
      return ' error-box'
    }else {
      return ''
    }
  }


  render() {
    
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {this.signupForm()}
          <div className='login-div'>
            <label className='error-parent session-label'>Email
              {this.showIcon('email')}
              <input className={'login-label' + this.renderErrors('email')} 
                type='email' 
                value={this.state.email} 
                onChange={this.update('email')} 
                placeholder='Email'
                />
            </label>
            <label className='error-parent session-label'>Password
              {this.showIcon('password')}
              <input className={'login-label' + this.renderErrors('password')} 
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