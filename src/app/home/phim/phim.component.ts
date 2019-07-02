import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShareDataService } from 'src/_core/services/share-data.service';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {

  idPhim: any;
  subParam: Subscription;
  subDetail: Subscription;
  suatT2: any = [];
  suatT3: any = [];
  suatT4: any = [];
  suatT5: any = [];
  suatT6: any = [];
  suatT7: any = [];
  suatCN: any = [];
  phimObj: any = {

  }
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
    this.getMovieDetail();
  }

  getParams() {
    this.idPhim = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getMovieDetail() {
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.idPhim}`;
    this.subDetail = this.dataService.get(uri).subscribe((res) => {
      this.phimObj = { ...res };
      this.chiaThu(this.phimObj.LichChieu);
    });
  }

  getTime(time: string, date: any) {
    let today = (date === null) ? new Date() : new Date(date);
    switch (time) {
      case 'year':
        let year = today.getFullYear();
        return year
      case 'month':
        let month = today.getMonth() + 1;
        return month;
      case 'day':
        let day = today.getDate();
        return day;
      case 'weekday':
        let weekday = today.getUTCDay();
        return weekday;
      case 'today':
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return date;
      default:
        break;
    }
  }

  chiaThu(mang) {
    mang.map((res) => {
      let date = this.getTime('weekday', res.NgayChieuGioChieu);
      switch (date) {
        case 0:
          this.suatT2.push(res);
          break;
        case 1:
          this.suatT3.push(res);
          break;
        case 2:
          this.suatT4.push(res);
          break;
        case 3:
          this.suatT5.push(res);
          break;
        case 4:
          this.suatT6.push(res);
          break;
        case 5:
          this.suatT7.push(res);
          break;
        case 6:
          this.suatCN.push(res);
          break;
        default:
          break;
      }
    });
  }

  ngOnDestroy() {
    this.subDetail.unsubscribe();
  }

}
