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

  render() {
    const steps = this.props.steps;
    if (!steps){ return null; }
    return (
      <section>
        <ul className="steps-index">
          {steps.map(step => <StepsIndexItem
                            key={step.id}
                            step={step}
                            articleId={this.props.articleId}/>)}
        </ul>
      </section>
    );
  }
}

export default StepsIndex;
