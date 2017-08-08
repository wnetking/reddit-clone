import React, { Component } from 'react';


class App extends Component {


  render() {
    return (
      <div className="App">
        {this.props.children && React.cloneElement(this.props.children, {
          firebaseRef: firebase.database().ref('posts'),
          posts: this.state.posts,
          loading: this.state.loading
        })}
      </div>
    );
  }
}

export default App;