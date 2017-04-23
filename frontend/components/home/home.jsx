import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Link} from 'react-router';
import SearchBar from '../search/search_bar';
import ArticlesIndexContainer from '../articles/articles_index_container';

class Home extends React.Component {
  render (){

    return (
      <div>
        <div className='splash-container'>
          <div className='welcome'>
            <h1 id='welcome-message'>Welcome to liftables!</h1>
            <p>
              Create and share instructive articles about fitness and lifting weights!
            </p>
          </div>
          <div className='splash-nav'>
            <span>I want to learn how to </span><SearchBar />
          </div>
        </div>
        <ArticlesIndexContainer />
      </div>
    );
  }
}

export default Home;
