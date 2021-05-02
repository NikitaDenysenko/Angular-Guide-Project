import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { IServerInfo } from '../interfaces'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  @Output() serverOnAWSCreated = new EventEmitter<IServerInfo>() //() in EventEmitter are calling constructor
  @Output('azureCreated') serverOnAzureCreated = new EventEmitter<IServerInfo>()
  @Output('gcpCreated') serverOnGCPCreated = new EventEmitter<IServerInfo>()
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
    const serverData: IServerInfo = {
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    }
    this.serverOnAzureCreated.emit(serverData)
  }

  onAddOnGCP (nameInput: HTMLInputElement): void {
    const serverData: IServerInfo = {
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    }
    this.serverOnGCPCreated.emit(serverData)
  }
}
