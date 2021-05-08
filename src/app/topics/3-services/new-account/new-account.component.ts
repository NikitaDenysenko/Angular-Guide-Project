import { Component, OnInit } from '@angular/core'
import { IAccount } from '../interfaces'
import { AccountsService } from '../services/accounts.service'
import { IdService } from '../services/id.service'

import { Status } from '../enums'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  constructor (
    private accountsService: AccountsService,
    private idService: IdService
  ) {}

  ngOnInit (): void {
  }

  status = Status

  onCreateAccount (accountName: string, accountStatus: string): void {
    const account: IAccount = {
      id: this.idService.getNewId(),
      name: accountName,
      status: accountStatus
    }
    this.accountsService.addAccount(account)
  }
}
