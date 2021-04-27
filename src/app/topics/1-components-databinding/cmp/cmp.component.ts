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

  onServerAdded (serverData: IServerInfo): void {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    })
  }

  onBlueprintAdded (blueprintData: IBlueprintInfo): void {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    })
  }

  getParagraphStyle (srvElement: IServerElements): string {
    if(srvElement.type === 'blueprint') {
      return 'blueprint'
    }
    if(srvElement.type === 'server') {
      return 'server'
    }
  }
}
