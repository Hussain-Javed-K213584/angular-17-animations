import { Component, output } from '@angular/core';

@Component({
  selector: 'app-comp-four',
  standalone: true,
  imports: [],
  templateUrl: './comp-four.component.html',
  styleUrl: './comp-four.component.css'
})
export class CompFourComponent {
  onButtonClick = output();
  onBackClicked = output();

  emitEvent() {
    this.onButtonClick.emit();
  }

  emitBackEvent() {
    this.onBackClicked.emit();
  }
}
