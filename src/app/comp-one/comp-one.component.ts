import { Component, output } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  standalone: true,
  imports: [],
  templateUrl: './comp-one.component.html',
  styleUrl: './comp-one.component.css'
})
export class CompOneComponent {
  onButtonClick = output();
  onBackClicked = output();
  
  emitEvent() {
    this.onButtonClick.emit();
  }

  emitBackEvent() {
    this.onBackClicked.emit();
  }
}
