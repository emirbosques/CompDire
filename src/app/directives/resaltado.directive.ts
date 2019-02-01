import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private elmRef : ElementRef ) {
    console.log('Directiva Resaltar');

    

   }

   @HostListener('mouseenter') mouseIn(){
    this.elmRef.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('mouseleave') mouseOut(){
    this.elmRef.nativeElement.style.backgroundColor = null;
   }

}
