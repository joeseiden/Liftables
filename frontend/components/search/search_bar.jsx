import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.query.length > 0){
      hashHistory.push(`articles?search_query=${this.state.query}`);
      this.setState({query: ''});
    } else {
      hashHistory.push('articles');
    }
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {

    return (
      <span className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input
            className="search-input"
            type="search"
            placeholder="Enter text to search" onChange={this.update('query')}
            value={this.state.query}/>
          <input className="search-submit" type="submit" value="Search"/>
        </form>
      </span>
    );
  }

}

export default SearchBar;
