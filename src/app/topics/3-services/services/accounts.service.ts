import { Injectable } from '@angular/core'
import { LoggingService } from './logging.service'
import { IdService } from './id.service'

import { IAccount } from '../interfaces'

@Injectable()
export class AccountsService {
  accounts: Array<IAccount> = [
    {
      id: this.idService.getNewId(),
      name: 'Master Account',
      status: 'active'
    },
    {
      id: this.idService.getNewId(),
      name: 'TestAccount',
      status: 'inactive'
    },
    {
      id: this.idService.getNewId(),
      name: 'Hidden Account',
      status: 'unknown'
    }
  ]

  constructor (
    private loggingService: LoggingService,
    private idService: IdService
  ) {}

  addAccount (account: IAccount) {
    this.accounts.push(account)
    this.loggingService.logStatusChange(status)
  }

  updateStatus (id: number, status: string) {
    this.accounts[id].status = status
    this.loggingService.logStatusChange(status)
  }
}
