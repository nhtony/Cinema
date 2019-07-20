import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {

  @Input() cumrap;
  @Input() suat;
  subParams: Subscription;

  obj = {
    src: '',
    cinename: '',
    filmname: ''
  }

  constructor(private data: ShareDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
  }

  getParams() {
    this.subParams = this.activatedRoute.queryParams.subscribe(
      (params: any) => {
        this.obj.filmname = params.name;
      }
    );
    this.getSrcOjb();
  }

  getSrcOjb() {
    this.data.shareHinhRap.subscribe((res) => {
      this.obj.src = res.src;
    });
  }
  
  ngOnDestroy() {
    this.subParams.unsubscribe();
  }

}



