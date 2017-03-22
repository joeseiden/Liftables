import React from 'react';
import ReactDOM from 'react-dom';
import { Link, hashHistory } from 'react-router';

class StepEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.step.id,
      title: this.props.step.title,
      body: this.props.step.body
    }
  }

  componentWillMount() {
    this.props.fetchStep(this.props.articleId, this.props.stepId);
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

    this.props.editStep(articleId, step).then((response) => {
      hashHistory.push(`articles/${response.article.id}/edit`)
    });
  }

  render() {
    return (
      <div>
        I am not finished yet.
      </div>
    )
  }
}

export default StepEditForm;
