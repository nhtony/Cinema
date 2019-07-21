import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/_core/services/data.service';
import { AuthService } from 'src/_core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private dataService: DataService, private _authService: AuthService) { }

  adLoginFrom: FormGroup;

  ngOnInit() {
    this._authService.clearAdminToken();
    this.adLoginFrom = new FormGroup({
      taikhoan: new FormControl('', Validators.required),
      matkhau: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });
  }

  adLoginFormHandel() {
    const objUser = {
      TaiKhoan: this.adLoginFrom.value.taikhoan,
      MatKhau: this.adLoginFrom.value.matkhau,
    }
    const uri = `QuanLyNguoiDung/DangNhap?TaiKhoan=${objUser.TaiKhoan}&MatKhau=${objUser.MatKhau}`;
    this.dataService.post(uri, objUser).subscribe((res: any) => {
      if (res === "Tài khoản hoặc mật khẩu không đúng !") {
        Swal.fire('Oops...', res, 'error');
      }
      else {
        if (res.MaLoaiNguoiDung === "QuanTri") {
          this._authService.loginAdmin();
          Swal.fire('Đăng nhập thành công !!!');
        }
        else {
          Swal.fire('Oops...', "Không có quyền truy cập !!!", 'error');
        }
      }
    });
  }

  login() {
    this.adLoginFormHandel();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.adLoginFrom.controls[controlName].hasError(errorName);
  }



}
