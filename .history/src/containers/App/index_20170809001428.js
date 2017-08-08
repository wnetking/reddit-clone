import React, { Component } from 'react';
import * as firebase from "firebase";
import config from './firebase-config';

class App extends Component {
  constructor() {
    super();

    // Initialize Firebase
    firebase.initializeApp(config);
  }

  

  render() {
    return (
      <div className="App">
        {this.props.children && React.cloneElement(this.props.children, {
          firebaseRef: firebase.database().ref('posts'),
          posts: this.state.posts,
          loading: this.state.loading
        })}
      </div>
    );
  }
}

export default App;