import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';

class Main extends React.Component{
  constructor(props){
    super(props);
  }

  loggedIn(){
    Boolean(this.props.currentUser);
  }

  render(){
    return(
      <NavBar loggedIn={this.loggedIn()} />
    );
  }
}

export default Main;
