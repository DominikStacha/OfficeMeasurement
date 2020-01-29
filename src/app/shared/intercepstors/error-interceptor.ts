import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackService } from '../services/snack.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private _snackService: SnackService,
    private _router: Router,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(
        (error: HttpErrorResponse) => {
          this._snackService.show('An error occurred while processing the request.');
          if (error.status === 401 || error.status === 200) {
            location.reload(true);
          } else if (error.status === 404) {
            this._router.navigate(['404']);
            return throwError(error);
          } else {
            this._router.navigate(['error'], {
              state: {
                error: JSON.parse(JSON.stringify(error))
              }
            } as NavigationExtras);
            return throwError(error);
          }
        }
      )
    );
  }
}
