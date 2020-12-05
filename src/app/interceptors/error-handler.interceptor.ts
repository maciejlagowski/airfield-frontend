import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ErrorService} from '../services/error.service';
import {ErrorEnum} from '../model/enum/error.enum';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
            let message = '';
            if (error.error instanceof ErrorEvent) {
              message = 'Angular Error:' + error.message;
              this.errorService.addError(ErrorEnum.ANGULAR_ERROR, message);
            } else {
              if (error.status === 0) {
                message = 'Server Error: Server cannot respond';
              } else {
                message = 'Server Error: ' + error.error.message + ' [' + error.status + ' ' + error.error.error + ']';
              }
              this.errorService.addError(ErrorEnum.SERVER_ERROR, message);
            }
            return throwError(error.message);
          }
        )
      );
  }
}
