import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {

  @Input() nav?:Boolean;
  @Input() openNav?: boolean;
  @Input() deviceMd?:Boolean;
  @Input() deviceSm?:Boolean;
  @Input() deviceXs?:Boolean;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
