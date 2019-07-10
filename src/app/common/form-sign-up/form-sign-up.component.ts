import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DataService } from 'src/_core/services/data.service';
import Swal from 'sweetalert2';
import { ShareDataService } from 'src/_core/services/share-data.service';
@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss']
})
export class FormSignUpComponent implements OnInit {

  constructor(private dataService: DataService, private shareDataService: ShareDataService) { }

  signUpForm: FormGroup;

  taikhoan = new FormControl('', Validators.required);
  matkhau = new FormControl('', [Validators.required, Validators.minLength(8)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  sodt = new FormControl('', Validators.required);

  ngOnInit() {
    this.signUpForm = new FormGroup({
      taikhoan: this.taikhoan,
      matkhau: this.matkhau,
      email: this.email,
      sodt: this.sodt
    });
    this.shareDataService.shareActionState.subscribe((res) => {
      if (res.status) {
        this.resetForm();
      }
    });
  }

  getMessageEmail() {
    return this.email.hasError('required') ? 'Vui lòng nhập email' :
      this.email.hasError('email') ? 'Email không đúng định dạng' : '';
  }

  getMessageRequired(message: string) {
    return message;
  }

  getMessagePassword(number: number) {
    return this.matkhau.hasError('required') ? 'Vui lòng nhập mật khẩu' :
      this.matkhau.hasError('minlength') ? 'Mật khẩu tối thiểu ' + number + ' ký tự' : '';
  }

  signUp(signUpForm) {
    const uri = "QuanLyNguoiDung/ThemNguoiDung";
    const objUser = {
      TaiKhoan: signUpForm.taikhoan,
      MatKhau: signUpForm.matkhau,
      Email: signUpForm.email,
      SoDT: signUpForm.sodt,
      MaNhom: 'GP10',
      MaLoaiNguoiDung: 'KhachHang'
    }
    this.dataService.post(uri, objUser).subscribe((res) => {
      if (typeof (res) === "object") {
        $(".btnDong").trigger("click");
        Swal.fire('Đăng ký thành công !!!');
      }
      else {
        $(".btnDong").trigger("click");
        Swal.fire('Oops...', res, 'error');
      }
    });
  }

  resetForm() {
    this.taikhoan = new FormControl('', Validators.required);
    this.matkhau = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.sodt = new FormControl('', Validators.required);
    this.signUpForm = new FormGroup({
      taikhoan: this.taikhoan,
      matkhau: this.matkhau,
      email: this.email,
      sodt: this.sodt
    });
  }


}
