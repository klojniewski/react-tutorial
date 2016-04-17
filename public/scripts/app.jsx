var data = [
  {id: 1, author: "Chris Eight", text: "This is one comment", date: "24.05.1986"},
  {id: 2, author: "Jordan Michael", text: "This is *another* comment", date: "24.05.1976"}
];

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
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
  <CommentBox url="/api/comments" pollInterval="2000" />,
  document.getElementById('content')
);