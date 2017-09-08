import React, {Component} from 'react';
import {Media, ButtonGroup, Button, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom'
import {helper} from '../../utils/helpersUtils'

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
      <Row className="flex-column-reverse">
        {Object.keys(posts).map((key) => {
          return (
            <Col xs="12" key={key} className="mt-2">
              <div className="card">
                <div className="card-block">
                  <Media>
                    <ButtonGroup vertical className="align-self-center mr-3">
                      <Button size="sm" onClick={postActions.postUpvote.bind(this, posts[key], key)}>U
                      </Button>
                      <span className="btn btn-secondary btn-sm disabled">
                        {posts[key].upvote - posts[key].downvote}
                      </span>
                      <Button size="sm" onClick={postActions.postDownvote.bind(this, posts[key], key)}>D
                      </Button>
                    </ButtonGroup>
                    <Media left className="mr-3">
                      <Media object width="80" height="80" src={posts[key].image} alt="Generic placeholder image"/>
                    </Media>
                    <Media body>
                      <Media heading>
                        <Link to={`/post/${key}`}>
                          {posts[key].title}
                        </Link>
                      </Media>
                      <p>
                        <span className="time-created">
                          опубликовано {helper.getDayExist(posts[key].date)} часов назад
                        </span>&nbsp;,&nbsp;&nbsp;
                        <span>автор: {posts[key].author}</span>.&nbsp;&nbsp;
                        {posts[key].commentsCount ?
                          <span>Комментариев: {posts[key].commentsCount}</span>
                          :
                          null
                        }
                      </p>
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