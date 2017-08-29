import React, {Component} from 'react';
import {Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';

class Posts extends Component {
  handleUpvote = (post, key) => {
    this.props.data.firebase.ref('posts/' + key).set({
      title   : post.title,
      upvote  : post.upvote + 1,
      downvote: post.downvote
    });
  }

  handleDownvote = (post, key) => {
    this.props.data.firebase.ref('posts/' + key).set({
      title   : post.title,
      upvote  : post.upvote,
      downvote: post.downvote + 1
    });
  }

  render() {
    let posts = this.props.data.posts;
    let _this = this;

    if (!posts) {
      return false;
    }

    if (this.props.data.loading) {
      return (
        <div>
          Loading... </div>
      );
    }

    return (
      <Row>
        {Object.keys(posts).map(function (key) {
          return (
            <Col sm="6" key={key}>
              <Card block>
                <CardTitle>Title: {posts[key].title}</CardTitle>
                <CardText>
                  <div>Upvotes: {posts[key].upvote}</div>
                  <div>Downvotes: {posts[key].downvote}</div>
                </CardText>
                <Button onClick={_this.handleUpvote.bind(this, posts[key], key)}>
                  Upvote
                </Button>
                <Button className="mt-2" onClick={_this.handleDownvote.bind(this, posts[key], key)}>
                  Downvote
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Posts;