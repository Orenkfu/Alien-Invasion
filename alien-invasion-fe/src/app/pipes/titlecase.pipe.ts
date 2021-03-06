import { Pipe, PipeTransform } from '@angular/core';
/**
 * Angular has a custom built in titlecase but I'm not a fan of the implementation - we'll make a new 'custom' titlecase pipe.
 */
@Pipe({
  name: 'custom_titlecase'
})
export class TitlecasePipe implements PipeTransform {
  prepositions = [
    'of', 'the', 'is', 'on', 'in', 'at', 'for'
  ]
  transform(value: any): any {
    if (!value) return null;
    if (typeof value != 'string') return value;
    value = value.replace(/_/g, ' ').replace(/-/g, ' ');
    let words = value.split(' ');
    return words.map((word, i) => {
      if (i > 0 && this.isPreposition(word)) {
        return word.toLowerCase();
      }
      return this.toTitleCase(word);
    }).join(' ');
  }
  toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
  isPreposition(word: string) {
    return this.prepositions.includes(word.toLowerCase());
  }

}
