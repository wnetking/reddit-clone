import React, { Component } from 'react';

class Posts extends Component {
 constructor() {
    super();

    // Initialize Firebase
    this.state = {}
    firebase.initializeApp(config);
  }
 componentWillMount() { 

 }

 render() {


  return (
   <div className="Posts">
   </div>
  );
 }
}

export default Posts;