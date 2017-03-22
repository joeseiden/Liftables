import React from 'react';
import ReactDOM from 'react-dom';
import { Link, hashHistory } from 'react-router';

class StepEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.stepId,
      title: '',
      body: ''
    };

    this.handleErrors = this.handleErrors.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchStep(this.props.articleId, this.props.stepId);
  }

  componentWillReceiveProps(newProps) {
    this.setState({title: newProps.step.title, body: newProps.step.body});
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
    let articleId = this.props.articleId;
    let step = this.state;
    this.props.updateStep(articleId, step).then((response) => {
      hashHistory.push(`articles/${response.step.article_id}/edit`);
    });
  }

  render() {
    return (
      <div className="step-form-container">
        {this.handleErrors()}
        <form id="step-edit-form" onSubmit={this.handleSubmit}>
          <label htmlFor='step-edit-title-input'>
            <h3>Title</h3>
          </label>
          <input type='text'
                 id='step-edit-title-input'
                 value={this.state.title}
                 placeholder='Title'
                 onChange={this.update('title')}/>
               <label htmlFor='step-edit-body-input'>
            <h3>Body</h3>
          </label>
          <textarea id='step-edit-body-input'
                     wrap='hard'
                     value={this.state.body}
                     placeholder='Body goes here'
                     onChange={this.update('body')}/>
          <input type='submit' id='step-edit-submit' value='Save Step'/>
        </form>
      </div>
    );
  }
}

export default StepEditForm;
