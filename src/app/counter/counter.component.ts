import { Component } from "@angular/core";

@Component({
    selector: "app-counter",
    templateUrl: "./counter.component.html"
})

export class CounterComponent{
  counter: number = 0;

  add(){
    this.counter++;
  }

  minus(){
    this.counter--;
  }
}