import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from 'src/_core/services/data.service';
import { ShareDataService } from 'src/_core/services/share-data.service';
import Swal from 'sweetalert2';
/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
})

export class TableComponent {

  @Input() mang;

  option = {
    isUser: false
  }

  listAccount = [];

  ELEMENT_DATA = [

  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private dataService: DataService, private shareDataService: ShareDataService,private _router: Router) {
  }

  ngOnInit() {
    this.shareDataService.shareActionState.subscribe((res) => {
      if (res !== null) {
        this.option.isUser = res.status;
      }
    });
    this.pushData(this.mang);
  }

  pushData(mang) {
    mang.forEach(element => {
      this.ELEMENT_DATA.push(element);
      this.dataSource.paginator = this.paginator;
    });
  }

  them() {
    if (this.option.isUser) {
      this.router.navigate(["/admin/them-nguoi-dung"]);
    }
    else {
      this.router.navigate(["/admin/them-phim"]);
    }
  }

  postId(ma) {
    if (this.option.isUser) {
      this.router.navigate(["/admin/cap-nhat-nguoi-dung/", ma]);
    }
    else {
      this.router.navigate(["/admin/cap-nhat-phim/", ma]);
    }
  }

  xoa() {
    this.selection.selected.forEach(element => {
      const uri = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${element.TaiKhoan}`;
      this.dataService.delete(uri).subscribe((res) => {
        if(res === 'Xóa người dùng thành công'){
          Swal.fire(res);
          this._router.navigate(['/admin/danh-sach-nguoi-dung']);
        }
        else{
          Swal.fire('Oops...', 'Không thành công!', 'error');
        }
      });
    });
}


displayedColumns: string[] = (this.option.isUser) ? ['select', 'TaiKhoan', 'MaLoaiNguoiDung', 'Email', 'SoDT', 'HanhDong'] : ['select', 'MaNhom', 'MaPhim', 'TenPhim', 'NgayKhoiChieu', 'HanhDong'];

dataSource = new MatTableDataSource(this.ELEMENT_DATA);
selection = new SelectionModel(true, []);

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row)
    );
}

/** The label for the checkbox on the passed row */
checkboxLabel(row ?): string {
  if (!row) {
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}

}

