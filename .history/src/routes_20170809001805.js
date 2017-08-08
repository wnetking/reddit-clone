import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as firebase from "firebase";
import config from './containers/App/firebase-config';

import App from './containers/App';
import Posts from './containers/Posts';

class Routes extends Component {
  constructor() {
    super();

    // Initialize Firebase
    firebase.initializeApp(config);
  }

  componentWillMount() {
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
      <Router>
        <Route path="/" render={(<App content={{
          firebaseRef: firebase.database().ref('posts'),
          posts: this.state.posts,
          loading: this.state.loading
        }} />
        <Route path="/posts" component={Posts} />
      </Router>
    )
  }
}


export default Routes;