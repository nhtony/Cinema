import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/_core/services/data.service';
import { ShareDataService } from 'src/_core/services/share-data.service';

@Component({
  selector: 'app-danh-sach-nguoi-dung',
  templateUrl: './danh-sach-nguoi-dung.component.html',
  styleUrls: ['./danh-sach-nguoi-dung.component.scss']
})
export class DanhSachNguoiDungComponent implements OnInit {


  mangNguoiDung = [];
  subListUser: Subscription;

  constructor(private dataSerVice: DataService,private data: ShareDataService) { }

  ngOnInit() {
    this.getDanhSachNguoiDung();
  }

  getDanhSachNguoiDung() {
    const uri = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP10`;
    this.subListUser = this.dataSerVice.get(uri).subscribe((res: any) => {
      this.mangNguoiDung.push(res);
      this.data.shareDataListUser(res);
    });
  }

  ngOnDestroy() {
    this.subListUser.unsubscribe();
  }
}