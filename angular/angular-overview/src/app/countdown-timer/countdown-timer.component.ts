import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit,OnDestroy {

  constructor() { }

  

  private intervalId = 0;
  message = 'sadasd';
  remainingTime: number;

  @Input()
  seconds = 11;

  ngOnInit() { }
  ngOnDestroy() { }
  clearTimer() { }
  start() { }
  stop() { }
  reset() { }
  private countDown() { }

  
}
