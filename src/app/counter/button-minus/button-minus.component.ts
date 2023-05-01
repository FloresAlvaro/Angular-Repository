import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-minus',
  templateUrl: './button-minus.component.html',
  styleUrls: ['./button-minus.component.css']
})
export class ButtonMinusComponent {

  @Input()
  counter: number = 0;

  @Output() onMinus: EventEmitter<number> = new EventEmitter();

  minus() {
    this.counter--;
    this.onMinus.emit(this.counter);
  }
}
