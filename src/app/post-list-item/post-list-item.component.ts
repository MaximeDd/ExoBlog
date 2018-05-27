import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../service/post.service';
import {PostModel} from '../model/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post: PostModel;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  onLike() {
    this.post.loveIts++;
    this.postService.savePosts();
  }

  onDislike() {
    this.post.loveIts--;
    this.postService.savePosts();
  }

  onDelete() {
    this.postService.removePost(this.post);
  }
}
