import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalTitle: string;
  condition: boolean;
  isPlayVideo: boolean;

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.shareActionState.subscribe((res: any) => {
      this.modalTitle = (res.status) ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ';
      this.condition = (res.status);
    });

    this.shareDataService.sharePlayState.subscribe((res: any) => {
      this.isPlayVideo = (res.status);
    });
  }

  stop() {
    $('#player').attr('src', '');
  }

}
