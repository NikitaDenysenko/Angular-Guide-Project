import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core'
import { IServerElements } from '../interfaces'
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit,OnChanges {
  @Input('srvElement') element: IServerElements

  constructor() {
    console.log('constructor called')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges called`)
    console.log(changes)
  }
  ngOnInit (): void {
    console.log('ngOnInit called')
  }
}
