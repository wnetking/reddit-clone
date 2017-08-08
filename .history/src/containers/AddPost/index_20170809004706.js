import React, { Component } from 'react';

class AddPost extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.firebaseRef.push({
      title: this.state.title
    });

    this.setState({
      title: ''
    });
  }

  render() {
    return (
      <div className="AddPost">
        <input 
          type="text" 
          placeholder="Write the title of your post" 
          onChange={ this.handleChange } 
          value={ this.state.title }
        />
        <button 
          type="submit" 
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }
}

export default AddPost;