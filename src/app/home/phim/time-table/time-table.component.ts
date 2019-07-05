import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {

  @Input() timeList;
  
  constructor() { }

  ngOnInit() {
    console.log(this.timeList);
    
  }

}



