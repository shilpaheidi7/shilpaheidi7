import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreateComponent } from './page-create/page-create.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { PageListComponent } from './page-list/page-list.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-page' },
  { path: 'create-page', component: PageCreateComponent },
  { path: 'page-list', component: PageListComponent },
  { path: 'page-edit/:id', component: PageEditComponent } 
 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
