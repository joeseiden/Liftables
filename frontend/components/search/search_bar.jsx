import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    };

    this.search = this.search.bind(this);
  }

  search(e){
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
        <form>
          <input
            className="search-input"
            type="search"
            onChange={this.update('query')}
            value={this.state.query}/>
          <span onClick={this.search} className="fa fa-search search-submit" aria-hidden="true"></span>
        </form>
      </span>
    );
  }

}

export default SearchBar;
