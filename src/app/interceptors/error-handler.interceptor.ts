import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {NotificationService} from '../services/notification.service';
import {NotificationEnum} from '../model/enum/notification.enum';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
            let message = '';
            if (error.error instanceof ErrorEvent) {
              message = 'Angular Error:' + error.message;
              this.notificationService.addNotification(NotificationEnum.ANGULAR_ERROR, message);
            } else {
              if (error.status === 0) {
                message = 'Server Error: Server cannot respond';
              } else {
                message = 'Server Error: ' + error.error.message + ' [' + error.status + ' ' + error.error.error + ']';
              }
              this.notificationService.addNotification(NotificationEnum.SERVER_ERROR, message);
            }
            return throwError(error.message);
          }
        )
      );
  }
}
