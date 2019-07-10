import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from 'src/_core/services/data.service';
import { ShareDataService } from 'src/_core/services/share-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-movie',
  templateUrl: './table-movie.component.html',
  styleUrls: ['./table-movie.component.scss']
})
export class TableMovieComponent implements OnInit {

  @Input() mang;

  ELEMENT_DATA = [

  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private dataService: DataService, private shareDataService: ShareDataService, private _router: Router) {
  }

  ngOnInit() {
    this.pushData(this.mang);
  }

  pushData(mang) {
    mang.forEach(element => {
      this.ELEMENT_DATA.push(element);
      this.dataSource.paginator = this.paginator;
    });
  }

  them() {
    this.router.navigate(["/admin/them-phim"]);
  }

  postId(ma) {
    this.router.navigate(["/admin/cap-nhat-phim/", ma]);
  }

  xoa() {
    this.selection.selected.forEach(element => {
      const uri = `QuanLyPhim/XoaPhim?MaPhim=${element.MaPhim}`;
      this.dataService.delete(uri).subscribe((res) => {
        if (res === 'Xóa phim thành công!') {
          Swal.fire(res);
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
        else {
          Swal.fire('Oops...', 'Không thành công!', 'error');
        }
      });
    });
  }


  displayedColumns: string[] = ['select', 'MaNhom', 'MaPhim', 'TenPhim', 'NgayKhoiChieu', 'HanhDong'];

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
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
