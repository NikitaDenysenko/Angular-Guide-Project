import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

//better practice

@Directive({
  selector: '[appRenderer]'
})
export class RendererDirective implements OnInit{

  constructor(private elRef: ElementRef<HTMLParagraphElement>,private rendered: Renderer2) { }

  ngOnInit() {
    this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }
}
