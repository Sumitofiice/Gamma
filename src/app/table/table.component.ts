import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  CommonApis
} from '../commonClass/commonApi';
import {
  MatTableDataSource
} from '@angular/material/table';
import {
  MatBottomSheet,
  MatBottomSheetRef
} from '@angular/material/bottom-sheet';
import {
  PopupComponent
} from './popup/popup.component';
import {
  MatPaginator
} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  displayedColumns: string[] = ['courseName', 'tags', 'description', 'coursePrice'];
  dataSource = new MatTableDataSource();
  datalength
  //  = ELEMENT_DATA;
  constructor(public router: Router, public commonApi: CommonApis, private _bottomSheet: MatBottomSheet) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
  //   this.paginator = mp;
  //   this.setDataSourceAttributes();
  // }
  ngOnInit() {

    this.commonApi.post_request("https://api.akademe.co/rest/private/interview/v1/course/getAll", "").subscribe(data => {
      let result: any = data.json();
      console.log("response Data", result.data)
      this.dataSource.data = result.data;
      this.dataSource.paginator = this.paginator;
      this.datalength = this.dataSource.data.length
      console.log(this.dataSource.data)
    })
  }
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }
  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  public getInnerHtml(element) {
    return `<div class="test-css">${element.description}</div>`;
  }
  openBottomSheet(): void {
    this._bottomSheet.open(PopupComponent);
  }
}
// @Component({
//   selector: 'popup',
//   templateUrl: './popup.html',
// })
// export class BottomSheetOverviewExampleSheet {
//   constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

//   openLink(event: MouseEvent): void {
//     this._bottomSheetRef.dismiss();
//     event.preventDefault();
//   }
// }