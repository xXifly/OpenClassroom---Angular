import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService]
})
export class AppComponent implements OnInit {
  
  constructor(private postService: PostService) {  }

  posts: any[];

  ngOnInit() {
  }

}
