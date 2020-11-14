import {Pipe, PipeTransform} from '@angular/core';
import {Reservation} from '../model/reservation';
import {Status} from '../model/status.enum';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(items: Reservation[]): any[] {
    if (!items) {
      return [];
    }
    return items.filter(it => {
      return (it.status !== Status.CANCELLED) && (it.status !== Status.REJECTED);
    });
  }
}
