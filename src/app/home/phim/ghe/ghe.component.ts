import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {

  @Input() ghe;
  dangChon: boolean = false;
  @Output() eventChonGhe = new EventEmitter();

  constructor(private data: ShareDataService) { }

  

  ngOnInit() {
    console.log(this.ghe);
    
  }

  chonGhe() {
    this.dangChon = !this.dangChon;
    let objGhe = {
      ghe: this.ghe,
      dangChon: this.dangChon
    }
    this.eventChonGhe.emit(objGhe);

  }

}
