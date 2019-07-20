import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { DataService } from 'src/_core/services/data.service';
import { Subscription } from 'rxjs';
import { CineplexService } from 'src/_core/services/cineplex.service';

@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})
export class LichChieuComponent implements OnInit {

  subMovieDetail: Subscription
  private mangIdPhim: any = [];
  private mangChiTietPhim: any = [];
  listPhimDangChieu: any = [];
  mangLichChieu: any = [[], [], [], [], [], [], []];
  isActived: string = 'bhd';
  objSrc = {
    src: 'https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png',
    name: 'BHD'
  }

  constructor(private dataService: DataService, private shareDataService: ShareDataService, private cinplexService: CineplexService) { }

  cumRap = this.cinplexService.getDanhSachCumRap();

  ngOnInit() {
    this.shareDataService.shareMaPhim.subscribe((res) => {
      if (res.length > 0) {
        this.mangIdPhim = res;
        this.getListDetail();
        setTimeout(() => {
          this.getLichChieu();
        }, 600);
      }
    })
    this.shareDataService.shareDataHinhRap(this.objSrc);
  }

  getListDetail() {
    let mang = [];
    this.mangIdPhim.map((id) => {
      let uri = 'QuanLyPhim/LayChiTietPhim?MaPhim=' + id;
      this.subMovieDetail = this.dataService.get(uri).subscribe((res) => {
        mang.push(res);
      });
    });
    setTimeout(() => {
      this.mangChiTietPhim = mang;
    }, 500);
  }

  getLichChieu() {
    this.mangChiTietPhim.map(res => {
      this.xepLichChieu(res.LichChieu);
    });
  }

  xepLichChieu(mang) {
    mang.map((res) => {
      let day = this.getTime('day', res.NgayChieuGioChieu);
      switch (day) {
        case 1:
          this.mangLichChieu[day - 1].push(res);
          break;
        case 2:
          this.mangLichChieu[day - 1].push(res);
          break;
        case 3:
          this.mangLichChieu[day - 1].push(res);
          break;
        case 4:
          this.mangLichChieu[day - 1].push(res);
          break;
        case 5:
          this.mangLichChieu[day - 1].push(res);
          break;
        case 6:
          this.mangLichChieu[day - 1].push(res);
          break;
        case 7:
          this.mangLichChieu[day - 1].push(res);
          break;
        default:
          break;
      }
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

  active(idName) {
    this.isActived = idName;
    let imgRap = document.getElementById(idName + '-img');
    this.objSrc.src = imgRap.getAttribute('src');
    this.objSrc.name = imgRap.getAttribute('name');
    this.shareDataService.shareDataHinhRap(this.objSrc);
  }

  ngOnDestroy() {
    this.subMovieDetail.unsubscribe();
  }

}
