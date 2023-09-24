import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'cours'
})
export class CoursPipe implements PipeTransform {
  /////----DomSanitizer aide à prévenir les bogues de sécurité de Cross Site Scripting (XSS) en nettoyant les valeurs pour qu'elles puissent être
//// utilisées en toute sécurité dans les différents contextes DOM./////

constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
