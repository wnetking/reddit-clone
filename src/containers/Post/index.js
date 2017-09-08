import React, {Component} from 'react';
import {
  Media,
  ButtonGroup,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
import AddComment from '../AddComment/'
import {helper} from '../../utils/helpersUtils'

class Post extends Component {

  render() {
    let {posts, fetching} = this.props.post;
    let {postActions} = this.props;
    let {id} =this.props.match.params;

    if (fetching) {
      return (
        <div>Loading... </div>
      );
    }

    return (
      <div>
        <Media className="mt-5">
          <ButtonGroup vertical className="align-self-center mr-3">
            <Button size="sm" onClick={postActions.postUpvote.bind(this, posts[id], id)}>U
            </Button>
            <span className="btn btn-secondary btn-sm disabled">
              {posts[id].upvote - posts[id].downvote}
            </span>
            <Button size="sm" onClick={postActions.postDownvote.bind(this, posts[id], id)}>D
            </Button>
          </ButtonGroup>
          <Media left className="mr-3">
            <Media object width="80" height="80" src={posts[id].image} alt="Generic placeholder image"/>
          </Media>
          <Media body>
            <Media heading>
              {posts[id].title}
            </Media>
            <p>
              <span className="time-created">
               опубликовано {helper.getDayExist(posts[id].date)} часов назад
              </span>&nbsp;,&nbsp;&nbsp;
              <span>автор: {posts[id].author}</span>.&nbsp;&nbsp;
              {posts[id].commentsCount ?
                <span>Комментариев: {posts[id].commentsCount}</span>
                :
                null
              }
            </p>
          </Media>
        </Media>
        {posts[id].commentsCount ?
          <div>
            <h3 className="text-center my-5">Комментарии</h3>
            <ListGroup>
              {Object.keys(posts[id].comments).map((key) => (
                <ListGroupItem key={key}>
                  <ListGroupItemHeading className="w-100">{posts[id].comments[key].author}</ListGroupItemHeading>
                  <ListGroupItemText>
                    {posts[id].comments[key].text}
                  </ListGroupItemText>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
          : null
        }
        <AddComment postActions={postActions} post={posts[id]} id={id}/>
      </div>
    )
  }
}
export default Post;