import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core'

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string

  constructor () {}
  ngOnInit () {
    this.backgroundColor = this.defaultColor
  }
  @HostListener('mouseenter') mouseover (eventData: Event) {
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') mouseleave (eventData: Event) {
    this.backgroundColor = this.defaultColor
  }
}
