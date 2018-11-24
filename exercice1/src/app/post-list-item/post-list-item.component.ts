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

  // Fonction permettant d'ajouter un like
  onLike(){
    this.loveIts++;
  }

  // Fonction permettant d'enlever un like
  onDislike(){
    this.loveIts--;
  }

}
