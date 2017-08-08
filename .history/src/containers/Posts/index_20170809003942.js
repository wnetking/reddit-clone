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
    {}
   </div>
  );
 }
}

export default Posts;