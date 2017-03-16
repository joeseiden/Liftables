import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AuthFormContainer from '../auth/auth_form_container';

class Main extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      modalOpen: false,
      formType: null
    };
    this._closeForm = this._closeForm.bind(this);
    this._openForm = this._openForm.bind(this);
    this.setFormType = this.setFormType.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount(){
  }

  rightNav(){
    if (this.props.currentUser) {
      return(
        <div className="right-nav">
          <span id="user-greeting">Hi {this.props.currentUser.username}!</span>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return(
        <div className="right-nav">
          <button onClick={this._openForm('login')} id="nav-login">
            Log In
          </button>
          <button onClick={this._openForm('signup')} id="nav-signup">
            Sign Up
          </button>
        </div>
      );
    }
  }

  setFormType(formType) {
    this.setState({formType}, this.props.clearErrors);
  }

  _openForm(formType){
    return (e) => {
      e.preventDefault();
      this.setState({
        modalOpen: true,
        formType
      });
    };
  }

  _closeForm(){
    this.setState({modalOpen:false}, this.props.clearErrors);
  }

  render(){
    return (

      <div id='main-nav' className="nav-bar">
        <div className="left-nav">
          <img id='logo' className="thumbnail"
            src="http://www.free-icons-download.net/images/weightlifting-icon-78421.png"/>
          <h1 id='logo-name'>Liftables</h1>
        </div>
          {this.rightNav()}
          <Modal
            isOpen={this.state.modalOpen}
            contentLabel="auth-modal"
            onRequestClose={this._closeForm}
            shouldCloseOnOverlayClick={true}
            id="auth-form-modal"
            className="modal">
            <AuthFormContainer
              formType={this.state.formType}
              closeModal={this._closeForm}
              setFormType={this.setFormType}/>
          </Modal>
      </div>
    );
  }
}

export default Main;
