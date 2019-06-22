import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {

  idPhim: any;
  subParam: Subscription;
  subDetail: Subscription;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getParams();
    this.getMovieDetail();
  }

  getParams() {
    this.idPhim = this.activatedRoute.snapshot.paramMap.get('id');
    // this.activatedRoute.queryParamMap.subscribe((params:any)=>{

    // });
    console.log(this.idPhim);

  }

  getMovieDetail() {
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.idPhim}`;
    this.subDetail = this.dataService.get(uri).subscribe((res) => {
      console.log(res);
    });
    console.log(this.subDetail);
    
  }

  ngOnDestroy(){
    this.subDetail.unsubscribe();
    this.subParam.unsubscribe();
  }

}
