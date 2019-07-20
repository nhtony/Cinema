import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/_core/services/data.service';
@Component({
  selector: 'app-lich-phim',
  templateUrl: './lich-phim.component.html',
  styleUrls: ['./lich-phim.component.scss']
})
export class LichPhimComponent implements OnInit {
  @Input() phim;
  thoigian: any;
  subDetail: Subscription;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getMovieDetail();
  }

  getMovieDetail() {
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.phim.MaPhim}`;
    this.subDetail = this.dataService.get(uri).subscribe((res) => {
      this.thoigian = res.LichChieu[0].NgayChieuGioChieu;
    });  
  }

  ngOnDestroy() {
    this.subDetail.unsubscribe();
  }

}
