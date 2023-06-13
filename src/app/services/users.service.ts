import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    let params = new HttpParams().append('page', '1');
    params.append('name', 'ernesto');

    return this.http.get('https://reqres.in/api/user', { params }).pipe(
      map((resp: any) => resp['data'])
    );
  }
}
