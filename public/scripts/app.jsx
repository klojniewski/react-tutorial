var data = [
  {id: 1, author: "Chris Eight", text: "This is one comment", date: "24.05.1986"},
  {id: 2, author: "Jordan Michael", text: "This is *another* comment", date: "24.05.1976"}
];

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
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
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id} date={comment.date}>
          {comment.text}
        </Comment>
      );
    });
    var commentNodesPlain = [
      <Comment key="1" author="chris">
          text
      </Comment>,
      <Comment key="2" author="jordan">
          text
      </Comment>
    ];
    // commentNodesPlain -> commentNodes using map()
    return (
      <div className="commentList">
        {commentNodes}
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
  <CommentBox data={data} />,
  document.getElementById('content')
);