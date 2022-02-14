import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Page}  from '../shared/page';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  
  dataSource:any = [];

  columnsToDisplay = ['id', 'name', 'author','genre', 'price','actions'];
  
  Page: any = [];

  constructor( public restApi: RestApiService) { }

  ngOnInit(): void {

    this.dataSource = Page;
    this.loadPages()
  }



  
  loadPages() {
    return this.restApi.getPages().subscribe((data: {}) => {
      this.Page = data;
      this.dataSource=this.Page;
    })
  }

  // Delete employee
  deletePage(id:any) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deletePage(id).subscribe(data => {
        this.loadPages()
      })
    }
  }  

  
}
