import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import StepsIndexItem from './steps_index_item';

class StepsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      steps: []
    };

    this.addStep = this.addStep.bind(this);
  }

  componentDidMount() {
    this.props.fetchSteps(this.props.articleId);
  }

  componentWillReceiveProps(newProps) {
    this.setState({steps: newProps.steps});
  }

  mergeSteps(left, right) {
    const results = [];

    while (left.length > 0 && right.length >0) {
      switch (left[0].order < right[0].order) {
        case true:
          results.push(left.shift());
          break;
        default:
          results.push(right.shift());
      }
    }

    return results.concat(left, right);
  }

  mergeSortSteps(arr){
    if (arr.length < 2) {
      return arr;
    } else {
      const middle = Math.floor(arr.length / 2);
      const left = this.mergeSortSteps(arr.slice(0, middle));
      const right = this.mergeSortSteps(arr.slice(middle));

      return this.mergeSteps(left, right);
    }
  }

  addStep(e) {
    e.preventDefault();
    let nextOrder;
    if (this.props.steps.length > 0) {
      nextOrder = (this.props.steps.slice(-1)[0].order + 1);
    } else {
      nextOrder = 1;
    }
    const newStep = {
      title: `Step ${nextOrder}`,
      body: '',
      order: nextOrder,
      article_id: this.props.articleId
    };
    this.props.createStep(this.props.articleId, newStep);
  }

  render() {
    const steps = this.state.steps;

    if (!steps){ return null; }
    const orderedSteps = this.mergeSortSteps(steps);
    return (
      <section className="steps-index-container">
        <ul className="steps-index">
          {orderedSteps.map((step, idx) => <StepsIndexItem
                            key={idx}
                            step={step}
                            articleId={this.props.articleId}
                            deleteStep={this.props.deleteStep}/>)}
        </ul>
        <button id="add-step-button" onClick={this.addStep}>
          Add Step
        </button>
      </section>
    );
  }
}

export default StepsIndex;
