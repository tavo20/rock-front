import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private alertService: AlertsService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = localStorage.getItem('token');

    const authReq = request.clone({
      headers: request.headers.set('Authorization', `${authToken}`)
    });

    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        switch(err.status) {
          case 401:
              localStorage.clear();
              this.router.navigate(['/auth']);
              break
          default:
            break
        }

        return of();
      })
    )
  }
}
