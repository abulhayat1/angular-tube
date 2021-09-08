import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() deviceMd!:Boolean;
  @Input() deviceSm!:Boolean;
  @Input() deviceXs!:Boolean;
  
   showNav = false;

  
  
  
  constructor() { }
  
 
}
