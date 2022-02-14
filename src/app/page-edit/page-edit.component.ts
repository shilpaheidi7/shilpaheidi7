import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss']
})
export class PageEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  pageDetails: any = {};

  constructor(   public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  
    ) { }

  ngOnInit():void {
    this.restApi.getPage(this.id).subscribe((data: {}) => {
      this. pageDetails = data;
    })
  }

  
  onSubmit(form: NgForm) {{
    if(window.confirm('Are you sure, you want to update?')){
          this.restApi.updatePage(this.id, this.pageDetails).subscribe(data => {
            this.router.navigate(['/page-list'])
          })
        }
  }
  


  }
}