import React from 'react';
import ReactDOM from 'react-dom';
import CommentsIndexItem from './comments_index_item';

class CommentsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: [],
      commentBody: '',
      userId: null
    };

    this.addComment = this.addComment.bind(this);
  }

  componentWillMount() {
    this.props.fetchComments(this.props.articleId);
  }

  componentWillReceiveProps(newProps) {
    this.setState({comments: newProps.comments});

    if (newProps.articleId !== this.props.articleId ){
      this.props.fetchComments(newProps.articleId);
    }

    if (this.props.currentUser && this.props.currentUser.id !== this.state.userId) {
      this.setState({userId: this.props.currentUser.id});
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  addComment(e) {
    let comment = {
      content: this.state.commentBody,
      user_id: this.state.userId,
      article_id: this.props.articleId
    };

    this.props.createComment(this.props.articleId, comment);
    this.setState({commentBody: ''});
  }

  render() {
    return (
      <section className="comments-section">
        <h3>Comments</h3>
        <div className="comments-index-container">
          <ul className="comments-index">
            {this.state.comments.map((comment, idx) => <CommentsIndexItem
                                    key={idx}
                                    comment={comment}
                                    articleId={this.props.articleId}
                                    deleteComment={this.props.deleteComment}
                                    articleAuthorId={this.props.articleAuthorId}
                                    currentUser={this.props.currentUser}/>)}
          </ul>
        </div>
        <form className="comment-form" onSubmit={this.addComment}>
          <textarea id="comment-form-textarea"
                    wrap="hard"
                    value={this.state.commentBody}
                    placeholder='Enter Comment'
                    onChange={this.update('commentBody')}/>
          <input type='submit' id='comment-form-submit' value='Add Comment'/>
        </form>
      </section>
    );
  }
}

export default CommentsIndex;
