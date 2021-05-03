import { Directive, ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appHostlistener]'
})
export class HostlistenerDirective  {

  constructor(private elRef: ElementRef<HTMLParagraphElement>, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover (eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink')
  }
  @HostListener('mouseleave') mouseleave (eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }
}
