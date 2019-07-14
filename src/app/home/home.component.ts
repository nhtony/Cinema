import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { Subscription } from "rxjs";
import { AuthService } from 'src/_core/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subListMovie: Subscription;
  constructor(private dataService: DataService, private shareDataSerVice: ShareDataService, private _authService: AuthService) { }

  ngOnInit() {
    this._authService.clear();
    this.getDanhSachPhim();
  }

  getDanhSachPhim() {
    const uri = `QuanLyPhim/LayDanhSachPhim?MaNhom=GP10`;
    this.subListMovie = this.dataService.get(uri).subscribe((res: any) => {
      this.shareDataSerVice.shareDataListMovie(res);
      this.pushListIdPhim();
    });
  }

  pushListIdPhim() {
    let listIdPhimDangChieu = [];
    this.shareDataSerVice.shareListPhimDangChieu.subscribe((res) => {
      res.map((res) => {
        listIdPhimDangChieu.push(res.MaPhim);
      });
    });
    this.shareDataSerVice.shareDataMaPhim(listIdPhimDangChieu);
  }

  ngOnDestroy() {
    this.subListMovie.unsubscribe();
  }

}
