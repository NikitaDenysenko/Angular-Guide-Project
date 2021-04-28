import { Component, OnInit } from '@angular/core'
import { IServerElements, IServerInfo, IBlueprintInfo } from '../interfaces'
import { serverElements } from '../data'
@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.scss']
})
export class CmpComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {}

  serverElements = serverElements

  onServerOnAWSAdded (serverData: IServerInfo): void {
    this.serverElements.push({
      cloudProvider: 'AWS',
      name: serverData.name,
      content: serverData.content
    })
  }

  onServerOnAzureAdded (blueprintData: IBlueprintInfo): void {
    this.serverElements.push({
      cloudProvider: 'Azure',
      name: blueprintData.name,
      content: blueprintData.content
    })
  }

  getParagraphStyle (srvElement: IServerElements): string {
    if(srvElement.cloudProvider === 'AWS') {
      return 'aws'
    }
    if(srvElement.cloudProvider === 'Azure') {
      return 'azure'
    }
  }
}
