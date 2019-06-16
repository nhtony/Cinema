import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalTitle:string;
  condition:boolean;

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.shareActionState.subscribe((res: any) => {
      this.modalTitle = (res.status) ? 'ĐĂNG NHẬP':'ĐĂNG KÝ';
      this.condition = (res.status);
    })
  }

  

}
