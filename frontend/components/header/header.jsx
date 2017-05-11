import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AuthFormContainer from '../auth/auth_form_container';
import NewArticleModalContainer from '../article_form/new_article_modal_container';
import {Link, hashHistory} from 'react-router';
import SearchBar from '../search/search_bar';

class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      newArticleModalOpen: false,
      authModalOpen: false,
      formType: null
    };
    this._closeAuthForm = this._closeAuthForm.bind(this);
    this._openAuthForm = this._openAuthForm.bind(this);
    this._closeNewArticleForm = this._closeNewArticleForm.bind(this);
    this._openNewArticleForm = this._openNewArticleForm.bind(this);
    this.setFormType = this.setFormType.bind(this);
    this.logInAsGuest = this.logInAsGuest.bind(this);
    this.goToArticles = this.goToArticles.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount(){
  }

  logInAsGuest(e){
    e.preventDefault();
    // figure out how to animate filling in form
    this.props.login({username: "barry_bluejeans",
                   password: "password"});
  }

  rightNav(){
    if (this.props.currentUser) {
      return(
        <div className="right-nav">
          <button onClick={this._openNewArticleForm()} id='new-article-button'>New Article</button>
          <Link to={`/user/${this.props.currentUser.id}`} className="profile-link">My Articles</Link>
          <span id="user-greeting">Hi {this.props.currentUser.username}!</span>
          <button onClick={this.props.logout} id='logout-button'>Log Out</button>
        </div>
      );
    } else {
      return(
        <div className="right-nav">
          <button onClick={this._openAuthForm('login')} id="nav-login">
            Log In
          </button>
          <button onClick={this.logInAsGuest} id="nav-demo">
            Demo
          </button>
          <button onClick={this._openAuthForm('signup')} id="nav-signup">
            Sign Up
          </button>
        </div>
      );
    }
  }

  setFormType(formType) {
    this.setState({formType});
    this.props.clearErrors();
  }

  backToHome(e) {
    e.preventDefault();
    hashHistory.push('/');
  }

  _openAuthForm(formType){
    return (e) => {
      e.preventDefault();
      this.setState({
        authModalOpen: true,
        formType
      });
    };
  }

  _closeAuthForm(){
    this.setState({authModalOpen:false});
    this.props.clearErrors();
  }

  _openNewArticleForm(){
    return (e) => {
      e.preventDefault();
      this.setState({
        newArticleModalOpen: true
      });
    };
  }

  _closeNewArticleForm(){
    this.setState({newArticleModalOpen: false});
    this.props.clearErrors();
  }

  goToArticles(e){
    e.preventDefault();
    if (this.props.pathname !== "articles"){
      hashHistory.push('articles');
    }
  }

  render(){
    return (

      <div id='main-nav' className="nav-bar">
        <div className="left-nav">
          <img id='logo' className="thumbnail"
            src="http://www.free-icons-download.net/images/weightlifting-icon-78421.png" onClick={this.backToHome}/>
          <h1 id='logo-name' onClick={this.backToHome}>Liftables</h1>
          <SearchBar />
          <Link to="/articles">All Articles</Link>
        </div>
          {this.rightNav()}
          <Modal
            isOpen={this.state.authModalOpen}
            contentLabel="auth-modal"
            onRequestClose={this._closeAuthForm}
            shouldCloseOnOverlayClick={true}
            id="auth-form-modal"
            className="modal">
            <AuthFormContainer
              formType={this.state.formType}
              closeModal={this._closeAuthForm}
              setFormType={this.setFormType}/>
          </Modal>
          <Modal
            isOpen={this.state.newArticleModalOpen}
            contentLabel="new-article-modal"
            onRequestClose={this._closeNewArticleForm}
            shouldCloseOnOverlayClick={true}
            id="new-article-form-modal"
            className="modal">
            <NewArticleModalContainer
              closeModal={this._closeNewArticleForm} />
          </Modal>
      </div>
    );
  }
}

export default Header;
