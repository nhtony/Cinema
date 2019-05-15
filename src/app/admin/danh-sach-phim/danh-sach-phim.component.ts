import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/_core/services/data.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})

export class DanhSachPhimComponent implements OnInit {
  
  danhSachPhim = [];
  mangPhim = [];


  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getDanhSachPhim();
  }

  getDanhSachPhim() {
    const uri = `QuanLyPhim/LayDanhSachPhim?MaNhom=GP10`;
    this.dataService.get(uri).subscribe((res: any) => {
      this.danhSachPhim = res;
      this.mangPhim.push(this.danhSachPhim);
    });
  }
  
  
}
