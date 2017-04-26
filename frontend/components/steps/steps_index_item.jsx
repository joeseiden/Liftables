import React from 'react';
import { Link } from 'react-router';
import EditStepContainer from './edit_step_container';

class StepsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.deleteStep = this.deleteStep.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  startEditing(e) {
    e.preventDefault(e);
    this.setState({editing: true});
  }

  stopEditing() {
    this.setState({editing: false});
  }

  deleteStep(e) {
    e.preventDefault();
    this.props.deleteStep(this.props.articleId, this.props.step.id);
  }

  renderItem() {
    if (this.state.editing) {
      return <EditStepContainer
        stepId = {this.props.step.id}
        articleId = {this.props.articleId}
        stopEditing = {this.stopEditing}
        />;
    } else {
      return <div className="step-preview">
              <span className="step-index-item-title">
                {this.props.step.title}
              </span>
              <p className="step-index-item-body">{this.props.step.body}</p>
              <div className="step-buttons">
                <Link to={`/articles/${this.props.articleId}/steps/${this.props.step.id}/edit`}>
                  Edit
                </Link>
                <button onClick={this.deleteStep}>Delete</button>
              </div>
            </div>;
    }
  }

  render () {

    return (
      <li className="step-index-item">
        <div className="step-preview">
          <span className="step-index-item-title">
            {this.props.step.title}
          </span>
          <p className="step-index-item-body">{this.props.step.body}</p>
          <div className="step-buttons">
            <Link to={`/articles/${this.props.articleId}/steps/${this.props.step.id}/edit`}>
              Edit
            </Link>
            <button onClick={this.deleteStep}>Delete</button>
          </div>
        </div>
      </li>
    );
  }
}

export default StepsIndexItem;
