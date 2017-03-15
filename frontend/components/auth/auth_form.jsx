import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';

class AuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleErrors = this.handleErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors([]);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === 'signup'){
      this.props.signup(this.state);
    } else {
      this.props.login(this.state);
    }
  }

  render() {
    return(
      <form id="auth-form" onSubmit={this.handleSubmit}>

      </form>
    );
  }
}

export default AuthForm;
