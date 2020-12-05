import {Injectable} from '@angular/core';
import {ErrorEnum} from '../model/enum/error.enum';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  errors: Map<ErrorEnum, string>;

  constructor() {
    this.errors = new Map();
  }

  addError(type: ErrorEnum, message: string): void {
    this.errors.set(type, message);
  }

  removeError(error: ErrorEnum): void {
    this.errors.delete(error);
  }
}
