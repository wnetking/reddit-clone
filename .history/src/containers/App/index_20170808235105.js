import React, { Component } from 'react';
import * as firebase from "firebase";
import config from './firebase-config';

class App extends Component {
  constructor() {
    super();

    // Initialize Firebase
    firebase.initializeApp(config);
  }

  componentWillMount() {
    ...

    let postsRef = firebase.database().ref('posts');

    let _this = this;

    postsRef.on('value', function (snapshot) {
      console.log(snapshot.val());

      _this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header" >
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro"> To get started, edit <code> src / App.js </code> and save to reload. </p>
      </div>
    );
  }
}

export default App;