import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PostService} from '../service/post.service';
import {PostModel} from '../model/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts = [];
  postsSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts();
    this.postsSubscription = this.postService.postSuject.subscribe(
      (posts: PostModel[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPost();
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

}
