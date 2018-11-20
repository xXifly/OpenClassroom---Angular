import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onLike(){
    this.loveIts++;
  }

  onDislike(){
    this.loveIts--;
  }

}
