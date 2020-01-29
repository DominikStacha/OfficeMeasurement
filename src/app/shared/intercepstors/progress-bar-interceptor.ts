import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import { ProgressBarService } from '../services/progress-bar.service';

@Injectable()
export class ProgressBarInterceptor implements HttpInterceptor {
  constructor(
    private progressBarService: ProgressBarService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.progressBarService.show();

    let cancelled = true;
    return next.handle(request).do(
      undefined,
      () => {
        // error
        this.progressBarService.hide();
        cancelled = false;
      },
      () => {
        this.progressBarService.hide();
        // completed
        cancelled = false;
      },
    ).finally(
      () => {
        if (cancelled) {
          this.progressBarService.hide();
        }
      },
    );
  }
}
