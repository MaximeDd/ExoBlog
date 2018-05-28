import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostService} from '../service/post.service';
import {PostModel} from '../model/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private postService: PostService) {
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.postForm = this.formBuilder
      .group({
        title: ['', Validators.required],
        content: ['', Validators.required]
      });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;

    const newPost = new PostModel(title, content);
    this.postService.createPost(newPost);
    this.router.navigate(['/posts']);
  }
}
