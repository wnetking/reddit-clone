import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class AddPost extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    let image = document.getElementById('image').value.trim() === '' ? "http://loremflickr.com/cache/images/f512fedb2caf38c32d290f98abfddbac.41.jpg" : document.getElementById('image').value;

    this.props.postActions.addPost({
      author  : document.getElementById('author').value,
      date    : new Date().getTime(),
      downvote: 0,
      title   : document.getElementById('title').value,
      upvote  : 0,
      image   : image
    });
  }

  render() {
    return (
      <div className="AddPost">
        <h2 className="text-center my-4">Добавить пост</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Ваше мнение</Label>
            <Input required type="text" name="title" id="title" placeholder="Напишите здесь то что думаете"/>
          </FormGroup>
          <FormGroup>
            <Label for="author">Автор</Label>
            <Input required type="text" name="author" id="author" placeholder="Ваше имя"/>
          </FormGroup>
          <FormGroup>
            <Label for="title">Ваша катринка</Label>
            <Input required type="url" name="image" id="image" placeholder="URL вашей картинки"/>
          </FormGroup>
          <Button>Добавить</Button>
        </Form>
      </div>
    );
  }
}

export default AddPost;