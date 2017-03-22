import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import StepsIndexItem from './steps_index_item';

class StepsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchSteps(this.props.articleId);
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

  render() {
    const steps = this.props.steps;
    if (!steps){ return null; }
    const orderedSteps = this.mergeSortSteps(steps);
    return (
      <section>
        <ul className="steps-index">
          {orderedSteps.map(step => <StepsIndexItem
                            key={step.id}
                            step={step}
                            articleId={this.props.articleId}/>)}
        </ul>
      </section>
    );
  }
}

export default StepsIndex;
