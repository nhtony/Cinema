import { Component, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { ShareDataService } from 'src/_core/services/share-data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;


  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2
  }

  carouselMovies: any = [[1, 2, 3], [1, 2, 3]];

  carouselItems: any = [];

  listPhimSapChieu: any = [];

  listPhimDangChieu: any = [];

  soPhimHienThi: number = 8;

  showState: boolean;

  constructor(private cdr: ChangeDetectorRef, private data: ShareDataService) {

  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.getListMovie();
    
  }

  getListMovie() {
    this.data.shareListMovie.subscribe((res) => {
      if (res.length > 0) {
        this.phanLoaiPhim(res);
        this.controlShowing();
        this.pushPhimDangChieu();
      }
    });
  }

  controlShowing() {
    this.data.shareShowState.subscribe((res) => {
      if (res.isPlaying) {
        this.carouselMovies.splice(0);
        this.phanTrangTuDong(this.listPhimDangChieu, this.soPhimHienThi);
      }
      else {
        this.carouselMovies.splice(0);
        this.phanTrangTuDong(this.listPhimSapChieu, this.soPhimHienThi);
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

      if (filmYear === currentYear && filmMonth > curretMonth) {
        this.listPhimSapChieu.push(element);
      }
      else if (filmYear === currentYear && filmMonth < curretMonth) {
        this.listPhimDangChieu.push(element);
      }
      else if (filmYear === currentYear && filmMonth === curretMonth) {
        this.listPhimDangChieu.push(element);
      }
      else if (filmYear > currentYear) {
        this.listPhimSapChieu.push(element);
      }

    });
  }

  phanTrang(mang, numberElement) {
    let page = 0;
    for (let index = 0; index < mang.length; index++) {
      if (index % numberElement === 0) {
        let start = page * numberElement;
        let end = 0;
        if (start >= numberElement) {
          start += 1;
        }
        if (mang.length < numberElement) {
          end = mang.length;
        }
        else {
          end = numberElement + start;
          if (end > mang.length) {
            this.carouselItems = mang.slice(start - 1);
            this.carouselMovies.push(this.carouselItems);
          }
          else {
            this.carouselItems = mang.slice(start, end);
            this.carouselMovies.push(this.carouselItems);
          }
        }
        for (let index = 0; index < this.carouselMovies[0].length; index++) {
          if (typeof this.carouselMovies[0][index] !== 'object') {
            this.carouselMovies.splice(0, 1);
            break;
          }
        }
        page += 1;
      }
    }
    if (page < 2) {
      this.carouselMovies.splice(0, 1);
    }
  }

  phanTrangTuDong(mang, numberElement) {
    if (mang.length < numberElement) {
      this.phanTrang(mang, numberElement / 2);
    }
    else {
      this.phanTrang(mang, numberElement);
    }
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }

  pushPhimDangChieu(){
    this.data.shareDataListPhimDangChieu(this.listPhimDangChieu);
  }
  

}
