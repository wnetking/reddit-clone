import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

import * as firebase from "firebase";
import config from './containers/App/firebase-config';

import Menu from './components/Menu'
import Posts from './containers/Posts';
import AddPost from './containers/AddPost';

class Routes extends Component {
  constructor() {
    super();

    // Initialize Firebase
    this.state = {
      loading: true
    }

    firebase.initializeApp(config);
  }

  componentWillMount() {
    let postsRef = firebase.database().ref('posts');

    let _this = this;

    postsRef.on('value', function (snapshot) {
      console.log(snapshot.val());

      _this.setState({
        posts  : snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    let data = {
      firebase: firebase.database(),
      posts   : this.state.posts,
      loading : this.state.loading
    }
    return (
      <Router>
        <div>
          <Menu />
          <Container className="mt-5">
            <Row>
              <Col>
                <Route exact path="/" render={() => <Posts data={data} />}/>
                <Route path="/add-post" render={() => <AddPost data={data} />}/>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    )
  }
}


export default Routes;