import React, { Component } from 'react';

class Posts extends Component {
 constructor() {
  super();
 }

 componentWillMount() {
 }

 render() {
  let posts = this.props.data.posts;

  return (
   <div className="Posts">
    {posts === undefined ?
     'loading ...'
     :
     Object.keys(posts).map((post, key) => {
      return (
       <div key={key}>
        {post[key].title}
       </div>
      );
     })
    }
   </div>
  );
 }
}

export default Posts;