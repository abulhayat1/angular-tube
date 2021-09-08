import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 str = "How Google's monopoly power is colonising the internet? Facts about Antitrust Cases against Google"
  constructor() { }

  ngOnInit(): void {
  }

}
