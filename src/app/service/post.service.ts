import {Injectable} from '@angular/core';
import {PostModel} from '../model/post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: PostModel[] = [];
  postSuject = new Subject<PostModel[]>();

  constructor() {
  }

  emitPost() {
    this.postSuject.next(this.posts);
  }

  getPosts() {
    firebase.database()
      .ref('/posts')
      .on('value', (data: DataSnapshot) => {
        const dataValue = data.val();
        this.posts = dataValue ? dataValue : [];
        this.emitPost();
      });
  }

  savePosts() {
    firebase.database()
      .ref('/posts')
      .set(this.posts);
    this.emitPost();
  }

  createPost(newPost: PostModel) {
    this.posts.push(newPost);
    this.savePosts();
  }

  removePost(oldPost: PostModel) {
    const oldPostId = this.posts.findIndex(
      (post) => {
        return post === oldPost;
      }
    );
    this.posts.splice(oldPostId, 1);
    this.savePosts();
  }

}
