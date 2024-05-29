import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[Directive]',
  standalone: true
})
export class CarouselDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  onClick(){
    var option = document.getElementsByClassName("option")
    for(let i=0; i<option.length; i++){
      option[i].classList.remove("active");
    }
    this.el.nativeElement.classList.add("active");
  }
}
