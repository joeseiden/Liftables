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
    hashHistory.push(`articles?search_query=${this.state.query}`);
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
            type="search"
            placeholder="Enter text to search" onChange={this.update('query')}/>
          <input type="submit" value="Search"/>
        </form>
      </span>
    );
  }

}

export default SearchBar;
