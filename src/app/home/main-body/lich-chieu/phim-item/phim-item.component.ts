import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import { DataService } from 'src/_core/services/data.service';

@Component({
  selector: 'app-phim-item',
  templateUrl: './phim-item.component.html',
  styleUrls: ['./phim-item.component.scss']
})
export class PhimItemComponent implements OnInit {

  constructor(private shareDataService: ShareDataService, private dataService: DataService) { }

  @Input() phim;

  private mangIdPhim = [];
  private mangChiTietPhim = [];

  ngOnInit() {
    this.shareDataService.shareMaPhim.subscribe((res) => {
      this.mangIdPhim = res;
      console.log(res);
    });
    this.getListDetail();
  }

  getListDetail() {
    this.mangIdPhim.map((id) => {
      let uri = 'QuanLyPhim/LayChiTietPhim?MaPhim=' + id;
      this.dataService.get(uri).subscribe((res) => {
        this.mangChiTietPhim.push(res);
        
      });
    });
  }
}
