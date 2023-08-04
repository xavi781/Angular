import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) { 
    element.nativeElement.style.backgroundColor = 'green';  //cogemos el elemento nativo que va tener nuestro seleccionador y modificar su comportamiento 
  }

}
