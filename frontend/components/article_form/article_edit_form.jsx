import React from 'react';
import ReactDOM from 'react-dom';
import { Link, hashHistory } from 'react-router';

class ArticleEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.article.id,
      title: this.props.article.title,
      description: this.props.article.description
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleErrors() {
    if (this.props.errors){
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) =>(
          <li className="animated pulse" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let that = this;
    this.props.editArticle(this.state).then((response) => {
      hashHistory.push(`articles/${response.article.id}`)
    });
  }

  render() {

    return (
      <div className="article-form-container">
        <form id="article-edit-form" onSubmit={this.handleSubmit}>
          <input type='text'
                 id='article-modal-title-input'
                 value={this.state.title}
                 placeholder='Title'
                 onChange={this.update('title')}/>
          <textarea id='article-modal-description-input'
                 wrap='hard'
                 value={this.state.description}
                 placeholder='Description'
                 onChange={this.update('description')}/>
          <input type='submit' value='Save Article'/>
        </form>
      </div>
    )
  }
}

export default ArticleEditForm;
