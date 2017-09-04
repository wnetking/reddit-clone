import React, {Component} from 'react';
import {Media, ButtonGroup, Button, Row, Col} from 'reactstrap';
import  {db} from '../../utils/firebaseUtils/'

class Posts extends Component {
  render() {
    let {posts, fetching} = this.props.post;
    let {postActions} = this.props;

    if (fetching) {
      return (
        <div>Loading... </div>
      );
    }

    return (
      <Row>
        {Object.keys(posts).map((key) => {
          return (
            <Col xs="12" key={key} className="mt-2">
              <div className="card">
                <div className="card-block">
                  <Media>
                    <ButtonGroup vertical className="align-self-center mr-3">
                      <Button size="sm" onClick={postActions.postUpvote.bind(this, posts[key], key)}>
                        U
                      </Button>
                        <span className="btn btn-secondary btn-sm disabled">
                          {posts[key].upvote - posts[key].downvote}
                        </span>
                      <Button size="sm" onClick={postActions.postDownvote.bind(this, posts[key], key)}>
                        D
                      </Button>
                    </ButtonGroup>
                    <Media left href="#" className="mr-3">
                      <Media object width="80" height="80" src="http://loremflickr.com/cache/images/f512fedb2caf38c32d290f98abfddbac.41.jpg" alt="Generic placeholder image"/>
                    </Media>
                    <Media body>
                      <Media heading>
                        {posts[key].title}
                      </Media>
                      {posts[key].author}
                    </Media>
                  </Media>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Posts;