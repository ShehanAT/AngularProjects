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
    // a=a.split('');
    return a.split('').sort(function(){return 0.5-Math.random()}).join('');
    // var letters: string[] = a.split("");

    // var d = '';
    // for(var b=a.length-1;0<b;b--){
    //   var c=Math.floor(Math.random()*(b+1));
    //   d=a[b];letters[b]=a[c];
    //   letters[c]=d;
    // }
    // return letters.join("")
  }

}
