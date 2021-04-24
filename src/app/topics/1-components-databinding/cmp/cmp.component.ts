import { Component, OnInit } from '@angular/core'
import { IServerElements,IServerInfo,IBlueprintInfo } from '../interfaces'
@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.scss']
})
export class CmpComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {
    
  }

  serverElements: Array<IServerElements> = [{type: 'server', name: 'Testserver', content: 'just a test'}]
  
  onServerAdded (serverData: IServerInfo) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    })
  }

  onBlueprintAdded (blueprintData: IBlueprintInfo) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    })
  }
}
