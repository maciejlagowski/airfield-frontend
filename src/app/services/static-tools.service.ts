import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticToolsService {

  constructor() {
  }

  public static getCurrentDate(): string {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = String(date.getFullYear());
    return yyyy + '-' + mm + '-' + dd;
  }

  public static clone(object: any): any {
    return JSON.parse(JSON.stringify(object));
  }

  public static getCurrentDateTime(withSeconds: boolean): string {
    return this.getCurrentDate() + ' ' + this.getCurrentTime(withSeconds);
  }

  public static getCurrentTime(withSeconds: boolean): string {
    const date = new Date();
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    if (withSeconds) {
      return hh + ':' + mm + ':' + ss;
    } else {
      return hh + ':' + mm;
    }
  }

  public static isEmailValid(email: string): boolean {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
  }

  public static isPhoneNumberValid(phoneNumber: string): boolean {
    return !isNaN(Number(phoneNumber)) && phoneNumber.length === 9 && Number(phoneNumber) > 0;
  }
}
