import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.scss']
})
export class NameCardComponent implements OnInit {

  constructor() { }

  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;

  ngOnInit() {
  }

}
