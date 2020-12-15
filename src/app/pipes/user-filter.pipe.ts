import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../model/dto/user';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {
  transform(items: User[], searchText: string): any[] {
    if (!items || !searchText) {
      return [];
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
