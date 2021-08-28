import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToHour',
})
export class NumberToHourPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (typeof value !== 'number') {
      return '0';
    }
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours} h ${minutes} min`;
  }
}
