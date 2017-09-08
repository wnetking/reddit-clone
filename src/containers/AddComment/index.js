import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class AddComment extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    let {id, post} = this.props;

    this.props.postActions.addComment(post, id, {
      author: document.getElementById('author').value,
      text  : document.getElementById('comment').value
    })

    document.getElementById('author').value = '';
    document.getElementById('comment').value = '';
  }

  render() {
    return (
      <div className="add-comment mt-5">
        <h4 className="text-center my-4">Добавить комментарий</h4>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="author">Ваше имя</Label>
            <Input required type="text" name="author" id="author" placeholder="Васька"/>
          </FormGroup>
          <FormGroup>
            <Label for="comment">Ваш комментарий</Label>
            <Input required type="textarea" name="comment" id="comment" placeholder="Напишите здесь то что думаете"/>
          </FormGroup>
          <Button>Добавить</Button>
        </Form>
      </div>
    )
  }
}