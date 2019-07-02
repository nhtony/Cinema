import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';

@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})
export class LichChieuComponent implements OnInit {

  idPhim:any;

  brands = [
    { hinhAnh: 'https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png', id: '1' },
    { hinhAnh: 'https://s3img.vcdn.vn/123phim/2018/09/e520781386bd5436e94d6e15e193a005.png', id: '2' },
    { hinhAnh: 'https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png', id: '3' },
    { hinhAnh: 'https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png', id: '4' },
    { hinhAnh: 'https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png', id: '5' }
  ];

  brandContents = [
    {
      id: '1', content: 'BHD', rap: [
        { idrap: 'bhd1', hinh: 'https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg', ten: 'BHD Star Cineplex-Bitexco', diachi: 'Bitexco' },
        { idrap: 'bhd2', hinh: 'https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-thao-dien-15379553942188.jpg', ten: 'BHD Star Cineplex-Vincom', diachi: 'Vincom' },
        { idrap: 'bhd3', hinh: 'https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-3-2-15379527367766.jpg', ten: 'BHD Star Cineplex-3/2' }
      ],
    },
    {
      id: '2', content: 'GALAXY', rap: [
        { idrap: 'g1', hinh: 'https://s3img.vcdn.vn/123phim/2018/09/galaxy-nguyen-du-15379626329832.jpg', ten: 'GLX - Nguyễn Du' },
        { idrap: 'g2', hinh: 'https://s3img.vcdn.vn/123phim/2018/09/galaxy-quang-trung-15381040745219.jpg', ten: 'GLX - Quang Trung' },
        { idrap: 'g3', hinh: 'https://s3img.vcdn.vn/123phim/2018/09/galaxy-trung-chanh-15381048160387.jpg', ten: 'GLX - Trung Chánh' }
      ],
    },
    {
      id: '3', content: 'CINESTAR', rap: [
        { idrap: 'ci1', hinh: 'https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg', ten: 'CNS - Hai Bà Trưng' },
        { idrap: 'ci2', hinh: 'https://s3img.vcdn.vn/123phim/2018/09/cinestar-quoc-thanh-15379636956745.jpg', ten: 'CNS - Quốc Thanh' },
      ],
    },
    {
      id: '4', content: 'CGV', rap: [
        { idrap: 'cgv1', hinh: 'https://s3img.vcdn.vn/123phim/2018/09/cgv-parkson-dong-khoi-15380173463280.jpg', ten: 'CGV - Parkson Đồng Khởi' },
        { idrap: 'cgv2', hinh: 'https://s3img.vcdn.vn/123phim/2018/09/cgv-su-van-hanh-15380173580593.jpg', ten: 'CGV - Sư Vạn Hạnh' },
        { idrap: 'cgv3', hinh: 'https://s3img.vcdn.vn/123phim/2018/09/cgv-golden-plaza-15380173771721.jpg', ten: 'CGV - Golden Plaza' },
      ],
    },
    {
      id: '5', content: 'LOTTE', rap: [
        { idrap: 'lot1', hinh: 'https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-thu-duc-15383864347748.jpg', ten: 'Lotte - Thủ Đức' },
        { idrap: 'lot2', hinh: 'https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-cong-hoa-15383860949090.jpg', ten: 'Lotte - Cộng Hòa' },
        { idrap: 'lot3', hinh: 'https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-nam-sai-gon-15383867312967.jpg', ten: 'Lotte - Nam Sài Gòn' }
      ],
    }
  ];

  listPhimDangChieu: any = [];

  constructor(private data: ShareDataService) { }

  ngOnInit() {
    this.getListMovie();
   
  }

  getListMovie() {
    this.data.shareListPhimDangChieu.subscribe((res) => {
      this.listPhimDangChieu = res;
      this.listPhimDangChieu.splice(3);
    });    
  }



 
}
