import React, { Component } from 'react';

class Posts extends Component {
 render() {
  if (this.props.data.loading) {
   return (
    <div>
     Loading...
    </div>
   );
  }

  return (
   <div className="Posts">
   
   </div>
  );
 }
}

export default Posts;