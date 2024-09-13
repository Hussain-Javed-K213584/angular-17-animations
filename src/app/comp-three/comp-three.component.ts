import { Component, output } from '@angular/core';

@Component({
  selector: 'app-comp-three',
  standalone: true,
  imports: [],
  templateUrl: './comp-three.component.html',
  styleUrl: './comp-three.component.css'
})
export class CompThreeComponent {
  onButtonClick = output();
  onBackClicked = output();
  
  emitEvent() {
    this.onButtonClick.emit();
  }

  emitBackEvent() {
    this.onBackClicked.emit();
  }
}
