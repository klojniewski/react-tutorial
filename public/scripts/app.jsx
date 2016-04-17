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

ReactDOM.render(
  <div className="commentBox">
    <h1>Comments</h1>
    <CommentBox />
    <CommentForm />
  </div>,
  document.getElementById('content')
);