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

  rapBHD = {

  }

  cumRap = [
    [
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg', ten: 'BHD Star Cineplex-Bitexco', diachi: 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1' },
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-thao-dien-15379553942188.jpg', ten: 'BHD Star Cineplex-Vincom', diachi: 'L5-Megamall, 159 XL Hà Nội, Q.2' },
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-3-2-15379527367766.jpg', ten: 'BHD Star Cineplex-3/2', diachi: 'L5-Vincom 3/2, 3C Đường 3/2, Q.10' }
    ],
    [
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/09/galaxy-nguyen-du-15379626329832.jpg', ten: 'GLX - Nguyễn Du', diachi: '116 Nguyễn Du, Q.1' },
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/09/galaxy-quang-trung-15381040745219.jpg', ten: 'GLX - Quang Trung', diachi: 'TTVH Q12 – 09, Q L 22, Trung Mỹ Tây , Q.12' },
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/09/galaxy-trung-chanh-15381048160387.jpg', ten: 'GLX - Trung Chánh', diachi: 'L3-Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp' }
    ],
    [
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', ten: 'CNS - Hai Bà Trưng', diachi: '135 Hai Bà Trưng, Bến Nghé, Q.1' },
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/09/cinestar-quoc-thanh-15379636956745.jpg', ten: 'CNS - Quốc Thanh', diachi: '271 Nguyễn Trãi, Q.1' },
    ],
    [
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/09/cgv-parkson-dong-khoi-15380173463280.jpg', ten: 'CGV - Parkson Đồng Khởi', diachi: 'Tầng 4, Trung tâm thương mại Golden Plaza, 922 Nguyễn Trãi, P. 14, Q. 5' },
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/09/cgv-su-van-hanh-15380173580593.jpg', ten: 'CGV - Sư Vạn Hạnh', diachi: 'T B1 , TTTM Vincom Center Landmark 81, 772 Điện Biên Phủ, P.22, Q. Bình Thạnh, HCM' },
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/09/cgv-golden-plaza-15380173771721.jpg', ten: 'CGV - Golden Plaza', diachi: 'Tầng 3, TTTM Vincom Center B, 72 Lê Thánh Tôn, Bến Nghé, Q. 1' },
    ],
    [
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-thu-duc-15383864347748.jpg', ten: 'Lotte - Thủ Đức', diachi: 'L7-Cantavil Premier, Xa Lộ Hà Nội, Q.2' },
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-cong-hoa-15383860949090.jpg', ten: 'Lotte - Cộng Hòa', diachi: 'L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp' },
      { hinh: 'https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-nam-sai-gon-15383867312967.jpg', ten: 'Lotte - Nam Sài Gòn', diachi: 'L4-Lotte Mart Phú Thọ, Q.11' }
    ]
  ];


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
          this.suatCN.push(res);
          break;
        case 1:
          this.suatT2.push(res);
          break;
        case 2:
          this.suatT3.push(res);
          break;
        case 3:
          this.suatT4.push(res);
          break;
        case 4:
          this.suatT5.push(res);
          break;
        case 5:
          this.suatT6.push(res);
          break;
        case 6:
          this.suatT7.push(res);
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
