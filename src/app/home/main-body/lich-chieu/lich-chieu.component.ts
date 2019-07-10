import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';

@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})
export class LichChieuComponent implements OnInit {
  idPhim: any;
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

  listPhimDangChieu: any = [];

  constructor(private data: ShareDataService) { }

  ngOnInit() {
    this.getListMovie();
  }

  getListMovie() {
    this.data.shareListPhimDangChieu.subscribe((res) => {
      this.listPhimDangChieu = res;
    });
  }

  addIdPhimForElement(mang) {
    let obj = {};
    mang.map((res) => {
     
    });
  }

}
