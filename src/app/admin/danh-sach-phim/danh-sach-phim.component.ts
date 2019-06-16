import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})

export class DanhSachPhimComponent implements OnInit {

  danhSachPhim = [];
  mangPhim = [];
  subListMovie: Subscription;

  constructor(private dataService: DataService, private shareDataSerVice: ShareDataService) {

  }

  ngOnInit() {
    this.getDanhSachPhim();
  }

  getDanhSachPhim() {
    const uri = `QuanLyPhim/LayDanhSachPhim?MaNhom=GP10`;
    this.subListMovie = this.dataService.get(uri).subscribe((res: any) => {
      this.danhSachPhim = res;
      this.shareDataSerVice.shareDataListMovie(res);
      this.mangPhim.push(this.danhSachPhim);
    });
 
  }
  ngOnDestroy() {
    this.subListMovie.unsubscribe();
  }
}
