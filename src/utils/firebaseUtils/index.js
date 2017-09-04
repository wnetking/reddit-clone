import * as firebase from "firebase";
import config from "./config.json"

export const db = {
  connect(){
    firebase.initializeApp(config);
  },
  getPosts(action){
    let postsRef = this.data().ref('posts');

    postsRef.on('value', action);
  },

  data(){
    return firebase.database();
  }
}