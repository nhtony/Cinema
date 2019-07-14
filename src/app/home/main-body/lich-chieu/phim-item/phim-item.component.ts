import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-phim-item',
  templateUrl: './phim-item.component.html',
  styleUrls: ['./phim-item.component.scss']
})
export class PhimItemComponent implements OnInit {

  constructor() { }

  @Input() phim;

  ngOnInit() {
   
  }
}
