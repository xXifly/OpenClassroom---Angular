import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;
  @Input() loveIts: number;
  @Input() index: number;


  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  // Fonction permettant d'ajouter un like
  onLike(){
    this.postService.onLike(this.index);
  }

  // Fonction permettant d'enlever un like
  onDislike(){
    this.postService.onDislike(this.index);
  }

  onDelete(){
    this.postService.deletePost(this.index);
    this.postService.emitPostsSubject();
  }

}
