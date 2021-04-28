import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { IBlueprintInfo, IServerInfo } from '../interfaces'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  @Output() serverOnAWSCreated = new EventEmitter<IServerInfo>() //() in EventEmitter are calling constructor
  @Output('azureCreated') serverOnAzureCreated = new EventEmitter<IBlueprintInfo>()
  @ViewChild('serverContentInput',{static: true}) serverContentInput: ElementRef;

  constructor () {}

  ngOnInit (): void {}

  onAddOnAWS (nameInput: HTMLInputElement): void {
    const serverData: IServerInfo = {
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    }
    this.serverOnAWSCreated.emit(serverData)
  }

  onAddOnAzure (nameInput: HTMLInputElement): void {
    const bluePrintData: IBlueprintInfo = {
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    }
    this.serverOnAzureCreated.emit(bluePrintData)
  }
}
