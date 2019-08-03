import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/_core/services/auth.service';
import Swal from 'sweetalert2';
import { ShareDataService } from 'src/_core/services/share-data.service';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  constructor(private dataService: DataService, private _authService: AuthService, private shareDataService: ShareDataService) { }

  loginForm: FormGroup;



  private objLogin: any = {
    status: true,
    username: '',
    taikhoan: '',
  };

  taiKhoan = new FormControl('', Validators.required);
  matKhau = new FormControl('', Validators.required);

  ngOnInit() {
    this.loginForm = new FormGroup({
      taiKhoan: this.taiKhoan,
      matKhau: this.matKhau,
    });
    this.shareDataService.shareActionState.subscribe((res) => {
      if (res.status) {
        this.resetForm();
      }
    });
  }

  getMessageRequired(message: string) {
    return message;
  }

  login(loginForm) {

    const objUser = {
      TaiKhoan: loginForm.taiKhoan,
      MatKhau: loginForm.matKhau,
    }

    const uri = `QuanLyNguoiDung/DangNhap?TaiKhoan=${objUser.TaiKhoan}&MatKhau=${objUser.MatKhau}`

    this.dataService.post(uri, objUser).subscribe((res: any) => {
      if (res === "Tài khoản hoặc mật khẩu không đúng !") {
        $(".btnDong").trigger("click");
        Swal.fire('Oops...', res, 'error');
      }
      else {
        $(".btnDong").trigger("click");
        Swal.fire('Đăng nhập thành công !!!');
        this._authService.login();
        if (this._authService.isAuthenticated()) {
          this.objLogin.username = res.HoTen;
          this.objLogin.taikhoan = res.TaiKhoan;
          this.shareDataService.shareDataCheckLoginState(this.objLogin);
          localStorage.setItem('authLogin', JSON.stringify((this.objLogin)));
        }
      }
    });
  }

  resetForm() {
    this.taiKhoan = new FormControl('', Validators.required);
    this.matKhau = new FormControl('', Validators.required);
    this.loginForm = new FormGroup({
      taiKhoan: this.taiKhoan,
      matKhau: this.matKhau,
    })
  }

}


