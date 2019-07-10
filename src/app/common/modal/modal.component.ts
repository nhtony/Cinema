import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.shareActionState.subscribe((res: any) => {
     
    });

  }

  stop() {
    $('#player').attr('src', '');
  }

}
