import React from 'react';
import ReactDOM from 'react-dom';
import { Link, hashHistory } from 'react-router';
import ImageBarContainer from '../images/image_bar_container';

class StepEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.stepId,
      title: '',
      body: '',
      saveButtonText: "Save Step"
    };
    this.handleErrors = this.handleErrors.bind(this);
    this.update = this.update.bind(this);
    this.saveStep = this.saveStep.bind(this);
    this.doneEditing = this.doneEditing.bind(this);
  }

  componentWillMount() {
    this.props.fetchStep(this.props.articleId, this.props.stepId);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.saveStep(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
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

  saveStep(e) {
    let articleId = this.props.articleId;
    let step = this.state;
    this.props.updateStep(articleId, step).then((response) => {
      this.setState({saveButtonText: "Saved"});
      setTimeout(() => this.setState({saveButtonText: "Save Step"}), 1500);
    });
  }

  autoSave() {

  }

  doneEditing() {
    hashHistory.push(`/articles/${this.props.articleId}/edit`);
  }

  render() {
    return (
      <div className="step-form-container form-container">
        {this.handleErrors()}
        <div className='step-form-header form-header'>
          <ImageBarContainer
            imageableType={'Step'}
            imageableId={this.state.id} />
          <div className='buttons'>
            <button className='submit-button' onClick={this.saveStep}>{this.state.saveButtonText}</button>
            <button className='submit-button' onClick={this.doneEditing}>Done</button>
          </div>
        </div>
        <form id="step-edit-form" className='edit-form'>
          <label htmlFor='step-edit-title-input'>
            <h3>Title</h3>
          </label>
          <input type='text'
                className='title-input'
                 id='step-edit-title-input'
                 value={this.state.title}
                 placeholder='Title'
                 onChange={this.update('title')}/>
               <label htmlFor='step-edit-body-input'>
            <h3>Body</h3>
          </label>
          <textarea id='step-edit-body-input'
                    className='body-input'
                     wrap='hard'
                     value={this.state.body}
                     placeholder='Body goes here'
                     onChange={this.update('body')}/>
        </form>
      </div>
    );
  }
}

export default StepEditForm;
