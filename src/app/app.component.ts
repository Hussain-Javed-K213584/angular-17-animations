import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompOneComponent } from "./comp-one/comp-one.component";
import { CompTwoComponent } from "./comp-two/comp-two.component";
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompFourComponent } from './comp-four/comp-four.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompOneComponent, CompTwoComponent, CompThreeComponent, CompFourComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [style({transform: 'translateX(-100%)'}), animate('500ms ease', style({ transform: 'translateX(0%)' }))]),
      transition(':leave', animate('500ms ease', style({transform: 'translateX(-100%)'})))
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [style({transform: 'translate(-200%)'}), animate('500ms', style({transform: 'translate(0%)'}))]),
      transition(':leave', [animate('500ms', style({transform: 'translate(-200%)'}))]),
    ]),
    trigger('disableTrigger', [
      state('disabled', style({
        opacity: 0.5
      })),
      state('enabled', style({
        opacity: 1
      })),
      transition('enabled <=> disabled', [animate('500ms ease')])
    ])
  ]
})
export class AppComponent {
  title = 'angular-animations';
  states = [0];
  currentState = 0;
  isShown = false;

  onClick() {
    if (this.states.length > 4){
      console.log("No more than 4 components");
      return;
    }
    this.states.push(this.states.length);
    console.log(this.states);
    this.currentState = this.states.at(-1) ?? -1;
    console.log(this.currentState);
  }

  onBackClick() {
    if (this.states.length <= 1){
      console.log("Cannot remove any more");
      return;
    }
    this.states.pop();
    this.currentState = this.states.at(-1) ?? -1;
  }

  show() {
    this.isShown = !this.isShown;
    console.log(this.isShown);
  }
}
