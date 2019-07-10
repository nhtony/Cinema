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

  mySlideOptions = {
    center: true, items: 5, dots: true, nav: true, autoplay: true, responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }, loop: true,
  };

  listPhimSapChieu: any = [];

  listPhimDangChieu: any = [];

  ngOnInit() {
    this.getListMovie();
  }

  getListMovie() {
    this.data.shareListMovie.subscribe((res) => {
      if (res.length > 0) {
        this.phanLoaiPhim(res);
      }
    });
    this.pushPhimDangChieu();
    console.log(this.listPhimDangChieu);
    this.pushIdPhim(this.listPhimDangChieu);
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
      default:
        break;
    }
  }

  phanLoaiPhim(mangPhim) {
    mangPhim.forEach(element => {
      let filmYear = this.getTime('year', element.NgayKhoiChieu);
      let filmMonth = this.getTime('month', element.NgayKhoiChieu);
      let currentYear = this.getTime('year', null);
      let curretMonth = this.getTime('month', null);
      if (filmYear > currentYear) {
        this.listPhimSapChieu.push(element);
      }
      else {
        if (filmYear === currentYear) {
          if (filmMonth > curretMonth) {
            this.listPhimSapChieu.push(element);
          }
          else {
            this.listPhimDangChieu.push(element);
          }
        }
        else {
          this.listPhimDangChieu.push(element);
        }
      }
    });
  }

  pushPhimDangChieu() {
    this.data.shareDataListPhimDangChieu(this.listPhimDangChieu);
   
  }

  pushIdPhim(mangPhim) {
    let mangIdPhim = [];
    mangPhim.map((res) => {
      mangIdPhim.push(res.MaPhim);
      this.data.shareDataMaPhim(mangIdPhim);
     
    });
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
