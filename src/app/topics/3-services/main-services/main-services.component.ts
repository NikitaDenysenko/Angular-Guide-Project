import { Component, OnInit } from '@angular/core'
import { AccountsService } from '../services/accounts.service'

import {IAccount} from '../interfaces'

@Component({
  selector: 'app-main-services',
  templateUrl: './main-services.component.html',
  styleUrls: ['./main-services.component.scss']
})
export class MainServicesComponent implements OnInit {
  constructor (private accountsService: AccountsService) {}

  ngOnInit (): void {
    this.accounts = this.accountsService.accounts
  }

  accounts: Array<IAccount> = []
}
