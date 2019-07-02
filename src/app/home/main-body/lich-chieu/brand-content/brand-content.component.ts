import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/_core/services/share-data.service';

@Component({
  selector: 'app-brand-content',
  templateUrl: './brand-content.component.html',
  styleUrls: ['./brand-content.component.scss']
})
export class BrandContentComponent implements OnInit {

  @Input() brandContent;
  active: boolean = false;

  constructor(private dataShare: ShareDataService) { }

  ngOnInit() {
    this.hideAllButId(1);
    this.activeFirstElement('1');
    this.dataShare.shareListId.subscribe((res) => {
      let tab = document.getElementById(res.id);
      if (tab !== null) {
        tab.setAttribute("style", "display: block;");
        this.hideAllButId(res.id);
      }
    });
  }

  activeFirstElement(val) {
    switch (val) {
      case '1':
        this.activeById('bhd1');
        break;
      case '2':
        this.activeById('g1');
        break;
      case '3':
        this.activeById('ci1');
        break;
      case '4':
        this.activeById('cgv1');
        break;
      case '5':
        this.activeById('lot1');
        break;
      default:
        break;
    }
  }

  hideAllButId(id) {
    this.activeFirstElement(id);
    let tabcontent = document.getElementsByClassName("tabcontent");
    let ele = document.getElementById(id);
    if (ele !== null) {
      for (let i = 0; i < tabcontent.length; i++) {
        if (ele.id !== tabcontent[i].id) {
          tabcontent[i].setAttribute("style", "display: none;");
        }
      }
    }
  }

  show(id) {
    let objId = {
      id: id,
    }
    this.dataShare.shareDataListId(objId);
    this.activeById(id);
  }

  activeById(id) {
    let tabcontent = document.getElementsByClassName("rapBtn");
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
