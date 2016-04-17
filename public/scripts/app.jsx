var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox2.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function () {
    return (
      <div className="commentList">
        <Comment author="Chris Eight" date="24.05.1986">This is one comment</Comment>
        <Comment author="Jordan Michael" date="24.05.1976">This is *another* comment</Comment>
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function () {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span className="commentDate">{this.props.date}</span>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <div className="commentBox">
    <h1>Comments</h1>
    <CommentList />
    <CommentForm />
  </div>,
  document.getElementById('content')
);