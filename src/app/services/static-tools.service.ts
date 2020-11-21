import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticToolsService {

  constructor() {
  }

  public static getCurrentDate(): string {
    const date: Date = new Date();
    const dd: string = String(date.getDate()).padStart(2, '0');
    const mm: string = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy: string = String(date.getFullYear());
    return yyyy + '-' + mm + '-' + dd;
  }
}
