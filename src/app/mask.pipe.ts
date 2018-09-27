import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, max: any = 5): any {
    if (value.length > max) {
      return value.substr(0, max) + '...';
    }
    return value;
  }

}
