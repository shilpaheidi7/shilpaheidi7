import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RestApiService } from './shared/rest-api.service';
import { PageCreateComponent } from './page-create/page-create.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageEditComponent } from './page-edit/page-edit.component';







@NgModule({
  declarations: [						
    AppComponent,
      PageCreateComponent,
      PageListComponent,
      PageEditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule,
    
  
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
