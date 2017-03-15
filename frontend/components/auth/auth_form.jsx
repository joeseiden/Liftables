import React from 'react';
import ReactDOM from 'react-dom';
import { Link, hashHistory } from 'react-router';

class AuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.formToggle = this.formToggle.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  formToggle(e) {
    e.preventDefault();
    if (this.props.formType === 'login'){
      this.props.setFormType('signup');
    } else {
      this.props.setFormType('login');
    }
  }

  handleErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) =>(
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.props.formType === 'login'){
      this.props.login(user).then(this.props._closeForm);
    } else {
      this.props.signup(user).then(this.props._closeForm);
    }
  }

  formToggleButton() {
      if (this.props.formType === "login") {
  			return(
        <button id="form-toggle" onClick={this.formToggle}>
          Sign Up
        </button>);
  		} else {
  			return(
          <button id="form-toggle" onClick={this.formToggle}>
            Log In
          </button>
      );
  	}
  }

  render() {
    const formType = (this.props.formType === 'login' ? "Log In" : "Sign Up");
    return(
      <div className="auth-form-container">
        {this.handleErrors()}
        {formType} or {this.formToggleButton()} instead
        <form id="auth-form" onSubmit={this.handleSubmit}>
          <label id="username">
            Username:
            <input type="text"
                   value={this.state.username}
                   onChange={this.update("username")}
                   className="auth-input"
                   placeholder="Username"/>
          </label>
          <br/>
          <label id="password"> Password:
            <input type="password"
                   value={this.state.password}
                   onChange={this.update("password")}
                   className="auth-input"
                   placeholder="Password"/>
          </label>
          <br/>
          <input type="submit" value={formType}/>
        </form>
      </div>
    );
  }
}

export default AuthForm;
