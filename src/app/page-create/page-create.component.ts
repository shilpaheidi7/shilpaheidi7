import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestApiService } from '../shared/rest-api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.scss']
})
export class PageCreateComponent implements OnInit {
  @Input() pageDetails = { name: '', author: '', genre: '',price: 0 }
  constructor( public restApi: RestApiService, 
    public router: Router,
  ) { }

  ngOnInit():void {
  }
  onSubmit(form: NgForm) {{
    this.restApi.createPage(this.pageDetails).subscribe((data: {}) => {
      this.router.navigate(['/page-list'])
    })
    
  }

}

}
