import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Container, Row, Col} from 'reactstrap';
import Menu from './components/Menu'
import Posts from './containers/Posts';
import AddPost from './containers/AddPost';
import Post from './containers/Post';
import * as postActions from './actions/postActions'

import  {db} from './utils/firebaseUtils/'
db.connect();

class Routes extends Component {
  componentWillMount() {
    db.getPosts((snapshot) => {
      let {postActions} = this.props;
      postActions.fetchPosts(snapshot.val());
    });
  }

  render() {
    let {post, postActions} = this.props;

    return (
      <Router>
        <div className="pb-5">
          <Menu />
          <Container className="mt-4">
            <Row>
              <Col>
                <Route exact path="/" render={() => <Posts post={post} postActions={postActions} />}/>
                <Route path="/add-post" render={() => <AddPost postActions={postActions} />}/>
                <Route path="/post/:id" render={({match}) => <Post match={match} post={post} postActions={postActions}/>}/>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

