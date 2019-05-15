import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
@Component({
  selector: 'app-them-phim',
  templateUrl: './them-phim.component.html',
  styleUrls: ['./them-phim.component.scss']
})

export class ThemPhimComponent implements OnInit {


  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    
  }
  themPhim(phimValue) {
    let objPhim = {
      TenPhim: phimValue.tenphim,
      Trailer: phimValue.trailer,
      HinhAnh: phimValue.hinhanh,
      MoTa: phimValue.mota,
      MaNhom: phimValue.manhom,
      NgayKhoiChieu: phimValue.ngaykhoichieu,
      DanhGia: phimValue.danhgia,
    }
    const uri = `QuanLyPhim/ThemPhimMoi`;
    this.dataService.post(uri, objPhim).subscribe((res: any) => {
      if (objPhim.TenPhim === res.TenPhim) {
        alert('Đã Thêm');
      }
      else {
        alert("Fail")
      }
    });
  }
}
