import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subListMovie: Subscription;
  constructor(private dataService: DataService, private shareDataSerVice: ShareDataService) { }

  ngOnInit() {
    this.getDanhSachPhim();
  }

  getDanhSachPhim() {
    let objPhim = {
      maPhim: ''
    }
    const uri = `QuanLyPhim/LayDanhSachPhim?MaNhom=GP10`;
    this.subListMovie = this.dataService.get(uri).subscribe((res: any) => {
      this.shareDataSerVice.shareDataListMovie(res);  
      objPhim.maPhim = res.MaPhim;
      this.shareDataSerVice.shareDataMaPhim(objPhim);
    });
  }

 

  ngOnDestroy() {
    this.subListMovie.unsubscribe();
  }



}
