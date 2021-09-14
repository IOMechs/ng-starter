import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counterVal = 10;
  person = {
    name: 'Ahsan Ayaz'
  }
  bgColor = 'red'
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.person.name = "Something else"
    }, 1000);
    setTimeout(() => {
      // this.person.name = "Something else"
      console.log(this.person.name)
    }, 3000);
  }

  increment() {
    this.counterVal++;
  }

  decrement() {
    this.counterVal--;
  }

}
