import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { AuthService } from 'src/_core/services/auth.service';
import { DataService } from 'src/_core/services/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  condition: boolean = false;
  subProfile: Subscription;

  constructor(private shareDataService: ShareDataService, private _authService: AuthService, private dataService: DataService, private router: Router) { }

  TaiKhoan: string = '';
  HoTen: string = '';

  ngOnInit() {
    this.shareDataService.shareCheckLoginState.subscribe((res) => {
      this.condition = res.status;
      this.TaiKhoan = res.taikhoan;
      this.HoTen = res.username;
    });
  }

  dangXuat() {
    this._authService.logout();
    this.condition = false;
    location.href = "/home";
  }

  xemLichSu() {
    const uri = `QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${this.TaiKhoan}`;
    this.subProfile = this.dataService.post(uri).subscribe((res) => {
      if (typeof res === 'object') {
        this.router.navigate(["/home/thong-tin-nguoi-dung"]);
        this.shareDataService.shareDataLichSu(res);
      }
    });
  }

  ngOnDestroy() {
    this.subProfile.unsubscribe();
  }
}
