import { Directive, ElementRef, OnInit } from '@angular/core'

//not a good practice

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor (private elementRef: ElementRef<HTMLParagraphElement>) {}

  ngOnInit () {
    this.elementRef.nativeElement.style.backgroundColor = 'green'
  }
}
