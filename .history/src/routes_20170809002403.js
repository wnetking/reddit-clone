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
    this.state = {
    posts: 
  }
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
    let data = {
      firebaseRef: firebase.database().ref('posts'),
      posts: this.state.posts,
      loading: this.state.loading
    }
    return (
      <Router>
        <Route path="/" render={<App data={data} />} />
        <Route path="/posts" render={<Posts data={data} />} />
      </Router>
    )
  }
}


export default Routes;