import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordRandomizer'
})
export class WordRandomizerPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value == ""){
      return "";
    }
    return this.scramble(value);
  }

  scramble(a: string){
    return a.split('').sort(function(){return 0.5-Math.random()}).join('');
  }

}
