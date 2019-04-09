import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  @Input() backgroundColor='#d9d9d9';
  @Input() Color='#4CAF50';
  @Input() Width=5;
  ngOnInit() {
  }

}
