import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import { ProgressBarService } from '../services/progress-bar.service';

@Injectable()
export class ProgressBarInterceptor implements HttpInterceptor {
  constructor(
    private _progressBarService: ProgressBarService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._progressBarService.show();

    let cancelled = true;
    return next.handle(request).do(
      undefined,
      () => {
        // error
        this._progressBarService.hide();
        cancelled = false;
      },
      () => {
        this._progressBarService.hide();
        // completed
        cancelled = false;
      },
    ).finally(
      () => {
        if (cancelled) {
          this._progressBarService.hide();
        }
      },
    );
  }
}
