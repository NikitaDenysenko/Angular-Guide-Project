import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { IBlueprintInfo, IServerInfo } from '../interfaces'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<IServerInfo>() //() in EventEmitter are calling constructor
  @Output('bpCreated') blueprintCreated = new EventEmitter<IBlueprintInfo>()
  @ViewChild('serverContentInput',{static: true}) serverContentInput: ElementRef;

  constructor () {}

  ngOnInit (): void {}

  onAddServer (nameInput: HTMLInputElement): void {
    const serverData: IServerInfo = {
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    }
    this.serverCreated.emit(serverData)
  }

  onAddBlueprint (nameInput: HTMLInputElement): void {
    const bluePrintData: IBlueprintInfo = {
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    }
    this.blueprintCreated.emit(bluePrintData)
  }
}
