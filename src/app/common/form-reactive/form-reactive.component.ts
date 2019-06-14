import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from 'src/_core/services/data.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { HttpHeaders } from "@angular/common/http";

let httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json;charset=UTF-8"
  })
}

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})

export class FormReactiveComponent implements OnInit {

  idPhim: any;

  condition: boolean = true;
  changeState: boolean = false;

  formTitle = {
    them: "Add Form",
    capNhat: "Update Form",
  }

  fileImg = [];

  listMovie = [];

  public genaralForm: FormGroup


  formGroup = this.fb.group({
    file: [null]
  });

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute,
    private router: Router, private fb: FormBuilder, private cd: ChangeDetectorRef, private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.getParams();
    this.resetForm();
    this.getListMovie();
  }

  getParams() {
    this.idPhim = this.activatedRoute.snapshot.paramMap.get('id'); //id la ten dat trong file routing
    if (this.idPhim !== null) {
      this.condition = false;
    }
  }

  genaralFormHandle() {
    let objPhim = {
      MaPhim: this.genaralForm.value.maphim,
      TenPhim: this.genaralForm.value.tenphim,
      Trailer: this.genaralForm.value.trailer,
      HinhAnh: '',
      MoTa: this.genaralForm.value.mota,
      MaNhom: this.genaralForm.value.manhom,
      NgayKhoiChieu: this.genaralForm.value.ngaykhoichieu,
      DanhGia: this.genaralForm.value.danhgia,
    }

    let uri: string = this.condition ? `QuanLyPhim/ThemPhimMoi` : `QuanLyPhim/CapNhatPhim`;
    this.dataService.post(uri, objPhim, httpOption).subscribe((res: any) => {
      if (typeof res === 'object') {
        const uriFile = `quanlyphim/UploadFile`;
        var formData = new FormData();
        formData.append("Files", this.fileImg[0]);
        formData.append("TenPhim", objPhim.TenPhim);
        if (this.changeState) {
          this.dataService.post(uriFile, formData).subscribe((result: any) => {
            if (result === true) {
              alert("Success !!!");
              this.resetForm();
            }
            else {
              alert("Fail")
            }
          });
        }
        else {
          alert("Success !!!");
        }
      }
      else{
        alert("Fail");
      }
    });
  }

  getListMovie() {
    this.shareDataService.shareListMovie.subscribe((res: any) => {
      res.map((item) => {
        if (item.MaPhim == this.idPhim) {
          this.genaralForm = new FormGroup({
            'maphim': new FormControl(item.MaPhim),
            'tenphim': new FormControl(item.TenPhim),
            'manhom': new FormControl(item.MaNhom),
            'trailer': new FormControl(item.Trailer),
            'ngaykhoichieu': new FormControl(item.NgayKhoiChieu),
            'mota': new FormControl(item.MoTa),
            'danhgia': new FormControl(item.DanhGia)
          })
        }
      });
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
      this.fileImg.push(file);
    }
    this.changeState = true;
  }

  resetForm() {
    this.genaralForm = new FormGroup({
      'maphim': new FormControl(null),
      'tenphim': new FormControl(null),
      'manhom': new FormControl(null),
      'trailer': new FormControl(null),
      'ngaykhoichieu': new FormControl(null),
      'mota': new FormControl(null),
      'danhgia': new FormControl(null)
    });
  }
}


