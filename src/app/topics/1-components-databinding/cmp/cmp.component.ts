import { Component, OnInit } from '@angular/core'
import { IServerElements, IServerInfo } from '../interfaces'
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

  onServerOnAzureAdded (serverData: IServerInfo): void {
    this.serverElements.push({
      cloudProvider: 'Azure',
      name: serverData.name,
      content: serverData.content
    })
  }

  onServerOnGCPAdded(serverData: IServerInfo): void {
    this.serverElements.push({
      cloudProvider: 'GCP',
      name: serverData.name,
      content: serverData.content
    })
  }

  getParagraphStyle (srvElement: IServerElements): string {
    if(srvElement.cloudProvider === 'AWS') {
      return 'aws'
    }
    if(srvElement.cloudProvider === 'Azure') {
      return 'azure'
    }
    if(srvElement.cloudProvider === 'GCP') {
      return 'gcp'
    }
  }
}
