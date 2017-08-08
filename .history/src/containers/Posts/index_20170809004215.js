import React, { Component } from 'react';

class Posts extends Component {
 constructor() {
  super();
 }

 componentWillMount() {
  console.log(this.props.data);
 }

 render() {
  return (
   <div className="Posts">
    {this.props.data.posts === undefined ?
     'loading ...' 
     :
     this.props.data.posts.map((post) => {
      
     })
    }
   </div>
  );
 }
}

export default Posts;