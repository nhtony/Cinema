import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/_core/services/data.service';
import Swal from 'sweetalert2';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.scss']
})
export class FormAdminComponent implements OnInit {

  genaralForm: FormGroup;
  condition: boolean = true;
  idUser: any;

  constructor(private dataService: DataService, private shareDataService: ShareDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.getParams();
    this.resetForm();
    this.getListUser();
  }


  createForm() {
    this.genaralForm = new FormGroup({
      taikhoan: new FormControl('', Validators.required),
      matkhau: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      sdt: new FormControl('', Validators.required),
      loainguoidung: new FormControl('', Validators.required),
    });
  }

  genaralFormHandle() {
    let objUser = {
      TaiKhoan: this.genaralForm.value.taikhoan,
      MatKhau: this.genaralForm.value.matkhau,
      Email: this.genaralForm.value.email,
      SoDT: this.genaralForm.value.sdt,
      MaNhom: 'GP10',
      MaLoaiNguoiDung: this.genaralForm.value.loainguoidung,
    }
    let uri: string = this.condition ? `QuanLyNguoiDung/ThemNguoiDung` : `QuanLyNguoiDung/CapNhatThongTin`;
    this.dataService.post(uri, objUser).subscribe((res: any) => {
      if (typeof res === 'object') {
        Swal.fire('Thành công !!!');
        this.resetForm();
      }
      else {
        Swal.fire('Oops...', 'Không thành công!', 'error');
        this.resetForm();
      }
    });
  }

  getParams() {
    this.idUser = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.idUser !== null) {
      this.condition = false;
    }
  }


  getListUser() {
    this.shareDataService.shareListUser.subscribe((res: any) => {
      res.map((item) => {
        if (item.TaiKhoan == this.idUser) {
          this.genaralForm = new FormGroup({
            'taikhoan': new FormControl(item.TaiKhoan),
            'matkhau': new FormControl(item.MatKhau),
            'email': new FormControl(item.Email),
            'sdt': new FormControl(item.SoDT),
            'loainguoidung': new FormControl(item.MaLoaiNguoiDung),
          })
        }
      });
    });
  }

  resetForm() {
    this.genaralForm = new FormGroup({
      'taikhoan': new FormControl(null),
      'matkhau': new FormControl(null),
      'email': new FormControl(null),
      'sdt': new FormControl(null),
      'loainguoidung': new FormControl(null),
    });
  }
}
