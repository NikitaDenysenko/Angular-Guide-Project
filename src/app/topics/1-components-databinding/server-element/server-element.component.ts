import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ContentChild,
  ElementRef,
  AfterContentInit,
  DoCheck,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild
} from '@angular/core'
import { IServerElements } from '../interfaces'
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked {
  @Input('srvElement') element: IServerElements
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef
  @ViewChild('heading', {static: true})  header: ElementRef

  constructor () {
    console.log('constructor called')
  }
  ngOnChanges (changes: SimpleChanges): void {
    console.log('ngOnChanges called')
    console.log(changes)
  }
  ngOnInit (): void {
    console.log('ngOnInit called')
  }
  ngDoCheck (): void {
    console.log('ngDoCheck called')
    //can't access "header" ,and "paragraph"
  }

  ngAfterContentInit () {
    console.log('ngAfterContentInit called')
    console.log(
      'Text Content of paragraph: ' + this.paragraph.nativeElement.textContent
    )
  }

  ngAfterContentChecked () {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
    console.log(
      'Text Content of header: ' + this.header.nativeElement.textContent
    )
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called')
  }
}
