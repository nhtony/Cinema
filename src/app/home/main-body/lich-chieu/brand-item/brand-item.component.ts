import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.scss']
})
export class BrandItemComponent implements OnInit {

  @Input() brand;
  constructor(private shareData: ShareDataService) { }

  ngOnInit() {
    this.active(1);
  }

  show(id) {
    let objId = {
      id: id,
    }
    this.shareData.shareDataListId(objId);
    this.active(id);
  }

  active(id) {
    let tabcontent = document.getElementsByClassName("brand-item");
    for (let i = 0; i < tabcontent.length; i++) {
      if (!tabcontent[i].className.includes(id)) {
        tabcontent[i].classList.remove('active');
      }
      else {
        tabcontent[i].classList.add('active');
      }
    }
  }


}

