import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  isPlayVideo: boolean;
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.sharePlayState.subscribe((res: any) => {
      this.isPlayVideo = (res.status);
    });

  }


}
