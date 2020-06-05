import { Component, OnInit, EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-outx',
  templateUrl: './outx.component.html',
  styleUrls: ['./outx.component.scss']
})
export class OutxComponent implements OnInit {
  
  @Output() public outer: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  outThis() {
    this.outer.emit('hello');
  }
}
