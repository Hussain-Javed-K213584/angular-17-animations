import { Component, output } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  standalone: true,
  imports: [],
  templateUrl: './comp-two.component.html',
  styleUrl: './comp-two.component.css'
})
export class CompTwoComponent {
  onButtonClick = output();
  onBackClicked = output();
  
  emitEvent() {
    this.onButtonClick.emit();
  }

  emitBackEvent() {
    this.onBackClicked.emit();
  }
}
