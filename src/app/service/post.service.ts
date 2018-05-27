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
    this.posts.push(new PostModel('Mon premier post', 'Accedat huc suavitas quaedam oportet sermonum atque morum, haudquaquam ' +
      'mediocre condimentum amicitiae. Tristitia autem et in omni re severitas habet illa quidem gravitatem, sed amicitia remissior esse ' +
      'debet et liberior et dulcior et ad omnem comitatem facilitatemque proclivior.'));

    this.posts.push(new PostModel('Mon deuxième post', 'Montius nos tumore inusitato quodam et novo ut rebellis et maiestati ' +
      'recalcitrantes Augustae per haec quae strepit incusat iratus nimirum quod contumacem praefectum, quid rerum ordo postulat ' +
      'dissimulantem formidine tenus iusserim custodiri.'));

    this.posts.push(new PostModel('Mon troisième post', 'Eodem tempore etiam Hymetii praeclarae indolis viri negotium est ' +
      'actitatum, cuius hunc novimus esse textum. cum Africam pro consule regeret Carthaginiensibus victus inopia iam lassatis, ex ' +
      'horreis Romano populo destinatis frumentum dedit, pauloque postea cum provenisset segetum copia, ' +
      'integre sine ulla restituit mora.'));
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
