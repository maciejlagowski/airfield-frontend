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
    const hh = String(date.getHours());
    const mm = String(date.getMinutes());
    const ss = String(date.getSeconds());
    if (withSeconds) {
      return hh + ':' + mm + ':' + ss;
    } else {
      return hh + ':' + mm;
    }
  }
}
