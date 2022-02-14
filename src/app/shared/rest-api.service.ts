import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Page } from './page';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  
  datasource(id: any) {
    throw new Error('Method not implemented.');
  }
  apiURL = 'http://localhost:3000';

constructor(private http:HttpClient) { }
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
} 

getPages(): Observable<Page> {
  return this.http.get<Page>(this.apiURL + '/pages' ) 
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
  
}

getPage(id:any): Observable<Page> {
  return this.http.get<Page>(this.apiURL + '/pages/' + id)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
  
}
createPage(page:any): Observable<Page> {
  return this.http.post<Page>(this.apiURL + '/pages', JSON.stringify(page),this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
updatePage(id:any, page:any): Observable<Page> {
  return this.http.put<Page>(this.apiURL + '/pages/' + id, JSON.stringify(page), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

deletePage(id:any){
  return this.http.delete<Page>(this.apiURL + '/pages/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

handleError(error:any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

  
}
