import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { ServersService } from '../servers.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string }
  paramsSubscribtion: Subscription

  constructor (
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit (): void {
    const serverId = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(serverId)
    this.paramsSubscribtion = this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id'])
    })
  }

  onEdit () {
    this.router.navigate(['edit'], { relativeTo: this.route,queryParamsHandling: 'preserve' })
  }
}
