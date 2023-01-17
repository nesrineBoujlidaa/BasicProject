
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';

import { Observable, throwError , Subject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService{






  subject = new Subject<string>();


  // Base url

  baseurl = 'http://localhost:8080/persons';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // POST
  CreateUser(data): Observable<User> {
    return this.http
      .post<User>(
        this.baseurl + '/create/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  GetUser(id): Observable<User> {
    return this.http
      .get<User>(this.baseurl + '/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  GetUsers(): Observable<Array<User>> {
    return this.http
      .get<Array<User>>(this.baseurl + '/')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // PUT
  UpdateUser(id, data): Observable<User> {
    return this.http
      .put<User>(
        this.baseurl + '/usertracking/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // DELETE
  DeleteUser(id) {
    return this.http
      .delete<User>(this.baseurl + '/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
