import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultCharacter = [];
    for (const character of value) {
      if (character.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultCharacter.push(character);
      };
    };
    return resultCharacter;
  }

}
