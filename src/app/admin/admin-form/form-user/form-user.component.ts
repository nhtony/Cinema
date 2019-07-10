import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/_core/services/data.service';
import Swal from 'sweetalert2';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  genaralForm: FormGroup;
  condition: boolean = true;
  idUser: any;
  submitted = false;
  constructor(private dataService: DataService, private shareDataService: ShareDataService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.getParams();
    this.resetForm();
    this.getListUser();
  }

  get f() { return this.genaralForm.controls; }

  createForm() {
    this.genaralForm = this.formBuilder.group({
      taikhoan: ['', Validators.required],
      matkhau: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      sdt: ['', Validators.required],
      loainguoidung: ['', Validators.required],
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
