import React from 'react';
import ReactDOM from 'react-dom';
import StepsIndexContainer from '../steps/steps_index_container';
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

  componentDidMount() {
    this.props.requestSingleArticle(this.props.articleId);
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
      {this.handleErrors()}
        <form id="article-edit-form" onSubmit={this.handleSubmit}>
          <label for='article-edit-title-input'>
          <h3>Title</h3>
          </label>
          <input type='text'
                 id='article-edit-title-input'
                 value={this.state.title}
                 placeholder='Title'
                 onChange={this.update('title')}/>
          <label for='article-edit-description-input'>
          <h3>Description</h3>
          </label>
          <textarea id='article-edit-description-input'
                 wrap='hard'
                 value={this.state.description}
                 placeholder='Description'
                 onChange={this.update('description')}/>
          <input type='submit' id="article-edit-submit" value='Save Article'/>
        </form>
        <StepsIndexContainer articleId={this.state.id} />
      </div>
    )
  }
}

export default ArticleEditForm;