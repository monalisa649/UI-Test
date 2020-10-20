import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, arg: any): any {
    if (arg === '' || arg.length < 3) {
      return value;
    }

    arg =arg.toLowerCase();

      return value.filter(element =>{
        return element.name.toLowerCase()
        .includes( arg)
    });









  }

}
