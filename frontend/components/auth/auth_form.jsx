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
          <li className="shake" key={`error-${i}`}>
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
      this.props.login(user).then(this.props.closeModal);
    } else {
      this.props.signup(user).then(this.props.closeModal);
    }
  }

  formToggleButton() {
      if (this.props.formType === "login") {
  			return(
      <span>
        <button id="form-toggle" onClick={this.formToggle}>
          Sign Up
        </button> instead?
      </span>);
  		} else {
  			return(
        <span>
          <button id="form-toggle" onClick={this.formToggle}>
            Log In
          </button> instead?
        </span>
      );
  	}
  }

  render() {
    const formType = (this.props.formType === 'login' ? "Log In" : "Sign Up");
    return(
      <div className="auth-form-container">
        {this.handleErrors()}
        <h2 className="form-header">{formType}</h2>
        <br/>
        <form id="auth-form" onSubmit={this.handleSubmit}>
          <label id="username">
            Username
            <br/>
            <input type="text"
                   value={this.state.username}
                   onChange={this.update("username")}
                   className="auth-input"
                   placeholder="Username"/>
          </label>
          <br/>
          <label id="password"> Password
            <br/>
            <input type="password"
                   value={this.state.password}
                   onChange={this.update("password")}
                   className="auth-input"
                   placeholder="Password"/>
          </label>
          <br/>
          <input id="auth-form-submit" type="submit" value={formType}/>
        </form>
        {this.formToggleButton()}
        <br/>
        <button id="close-button" onClick={this.props.closeModal}>Close</button>
      </div>
    );
  }
}

export default AuthForm;
