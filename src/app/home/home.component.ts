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

  constructor(private dataService: DataService, private shareDataService: ShareDataService, private _authService: AuthService) {

  }

  ngOnInit() {
    this.getDanhSachPhim();
    this._authService.clearAdminToken();
    if (this._authService.isAuthenticated()) {
      let authLogin = JSON.parse(sessionStorage.getItem('authLogin'));
      if (authLogin !== null) {
        this.shareDataService.shareDataCheckLoginState(authLogin);
      }
    }
  }

  getDanhSachPhim() {
    const uri = 'QuanLyPhim/LayDanhSachPhim?MaNhom=GP09';
    this.subListMovie = this.dataService.get(uri).subscribe((res: any) => {
      this.shareDataService.shareDataListMovie(res);
      this.pushListIdPhim();
    });
  }

  pushListIdPhim() {
    let listIdPhimDangChieu = [];
    this.shareDataService.shareListPhimDangChieu.subscribe((res) => {
      res.map((res) => {
        listIdPhimDangChieu.push(res.MaPhim);
      });
    });
    this.shareDataService.shareDataMaPhim(listIdPhimDangChieu);
  }

  ngOnDestroy() {
    this.subListMovie.unsubscribe();
  }

}
