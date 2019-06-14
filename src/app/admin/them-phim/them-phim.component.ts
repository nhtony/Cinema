import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
@Component({
  selector: 'app-them-phim',
  templateUrl: './them-phim.component.html',
  styleUrls: ['./them-phim.component.scss']
})

export class ThemPhimComponent implements OnInit {


  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    
  }
  
}
