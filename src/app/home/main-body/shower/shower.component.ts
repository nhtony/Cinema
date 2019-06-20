import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';


@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrls: ['./shower.component.scss']
})
export class ShowerComponent implements OnInit {


  constructor(private data: ShareDataService) { }

  showOjb = {
    isPlaying: true
  }

  ngOnInit() {
    this.data.shareDataShowState(this.showOjb);
  }

  showPhimDangChieu() {
    this.showOjb.isPlaying = true;
    this.data.shareDataShowState(this.showOjb);
  }
  showPhimSapChieu() {
    this.showOjb.isPlaying = false;
    this.data.shareDataShowState(this.showOjb);
  }
}
