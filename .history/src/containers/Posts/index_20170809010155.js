import React, { Component } from 'react';

class Posts extends Component {
 constructor() {
  super();
 }

 componentWillMount() {
 }

 render() {
  let posts = this.props.data.posts;
  let _this = this;

  return (
   <div className="Posts">
    {Object.keys(posts).map(function (key) {
     return (
      <div key={key}>
       <div>Title: {posts[key].title}</div>
       <div>Upvotes: {posts[key].upvote}</div>
       <div>Downvotes: {posts[key].downvote}</div>
       <div>
        <button
         onClick={_this.handleUpvote.bind(this, posts[key], key)}
         type="button"
        >
         Upvote
                </button>
        <button
         onClick={_this.handleDownvote.bind(this, posts[key], key)}
         type="button"
        >
         Downvote
                </button>
       </div>
      </div>
     );
    })}
   </div>
  );
 }
}

export default Posts;