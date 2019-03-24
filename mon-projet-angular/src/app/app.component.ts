import { Component, OnInit } from '@angular/core';
import { reject } from 'q';
import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  secondes: number;

  constructor() {}

  ngOnInit(){
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value: number) =>  {
        this.secondes = value;
      },
      (error: any) => {
        console.log('ERROR')
      },
      () => {
        console.log('Observable complete')
      }
    )
  }

}
