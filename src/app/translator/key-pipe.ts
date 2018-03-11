import { Pipe } from '@angular/core';
import { PipeTransform} from '@angular/core';

@Pipe({
  name:"key"
})
export class KeyPipe implements PipeTransform {

  transform(value: Object, args: string[]): Object {
    const keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
