import React, { Component } from 'react';

class Posts extends Component {
 componentWillMount() { }

 render() {


  return (
   <div className="Posts">
    {this.props.data.posts.map((post) => {
     return (

      <div>
       {post.title}
      </div>
     );
    })}
   </div>
  );
 }
}

export default Posts;