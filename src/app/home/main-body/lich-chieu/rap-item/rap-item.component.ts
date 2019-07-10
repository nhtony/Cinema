import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rap-item',
  templateUrl: './rap-item.component.html',
  styleUrls: ['./rap-item.component.scss']
})
export class RapItemComponent implements OnInit {

  @Input() rap;
  constructor() { }

  ngOnInit() {
    
  }

}
