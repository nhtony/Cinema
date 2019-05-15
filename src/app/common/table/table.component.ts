import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from 'src/_core/services/data.service';
let ELEMENT_DATA = [

];
/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
})

export class TableComponent {
  @Input() phim;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private dataService: DataService) {

  }

  objPhim = {
    TenPhim: "",
    Trailer: "",
    HinhAnh: "",
    MoTa: "",
    MaNhom: "",
    NgayKhoiChieu: "",
    DanhGia: "",
  }

  ngOnInit() {
    this.pushData();


  }

  pushData() {
    this.phim.forEach(element => {
      ELEMENT_DATA.push(element);
      this.dataSource.paginator = this.paginator;
    });
  }

  themPhim() {
    this.router.navigate(["/admin/them-phim",], {});
  }

  displayedColumns: string[] = ['select', 'MaNhom', 'MaPhim', 'TenPhim', 'NgayKhoiChieu', 'HanhDong'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
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
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  layThongTinEdit() {
     this.objPhim = {
      TenPhim: "",
      Trailer: "",
      HinhAnh: "",
      MoTa: "",
      MaNhom: "",
      NgayKhoiChieu: "",
      DanhGia: "",
    }
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=1`;
    this.dataService.get(uri).subscribe((res: any) => {
      this.objPhim = {
        TenPhim: res.TenPhim,
        Trailer: res.Trailer,
        HinhAnh: res.HinhAnh,
        MoTa: res.MoTa,
        MaNhom: res.MaNhom,
        NgayKhoiChieu: res.NgayKhoiChieu,
        DanhGia: res.DanhGia,
      }
      console.log(this.objPhim);
    });
  }
}

