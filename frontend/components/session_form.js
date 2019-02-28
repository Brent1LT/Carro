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
          <label>Firstname:
            <input type='text' value={this.state.firstname} onChange={this.update('firstname')} />
          </label>
          <label>Lastname:
            <input type='text' value={this.state.lastname} onChange={this.update('lastname')} />
          </label>
        </>
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
          <form onSubmit={this.handleSubmit}>
            <h2>{this.props.formType}</h2>
            <label>Email:
            <input type='text' value={this.state.email} onChange={this.update('email')} />
            </label>
            <label>Password:
            <input type='password' value={this.state.password} onChange={this.update('password')} />
            </label>
            {this.signupForm()}
      
            {this.props.otherForm}
            <div onClick={this.props.closeModal} className="close-x">X</div>
      
            <input type="Submit" />
          </form>
        )
      }
  
  
}

export default SessionForm;