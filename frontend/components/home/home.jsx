import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Link} from 'react-router';

class Home extends React.Component {
  render (){

    return (
      <div className='splash-container'>
        <div className='welcome'>
          <h1 id='welcome-message'>Welcome to Liftables!</h1>
          <p>
            Create and share instructive articles about fitness and lifting weights!
          </p>
        </div>
        <div className='splash-nav'>
          <span>See <Link to='articles'>all articles</Link> or enter a term to search below...</span>
          <div>
            Search bar goes here
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
