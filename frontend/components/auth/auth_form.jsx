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
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
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
    console.log(this.state);
    const user = this.state;
    console.log(user);
    this.props.processForm(user);
  }

  navLink() {
      if (this.props.formType === "login") {
  			return <Link to="/signup">Sign Up</Link>;
  		} else {
  			return <Link to="/login">Log In</Link>;
  		}
  	}

  render() {
    const formType = (this.props.formType === 'login' ? "Log In" : "Sign Up");
    return(
      <div className="auth-form-container">
        {this.handleErrors()}
        {formType} or {this.navLink()} instead
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
