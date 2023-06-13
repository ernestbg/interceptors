import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders(
      { 'x-token': 'VDNSIOVPN2782RBRPN272XOCPDNV98975ROWPV' }
    );

    const reqClone = req.clone(
      { headers }
    )

    return next.handle(req).pipe(
      catchError(this.handleError)
    )

  }

  handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError('error personalizado')
  }
}
