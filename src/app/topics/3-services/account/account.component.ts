import { Component, OnInit, Input } from '@angular/core'
import { AccountsService } from '../services/accounts.service'
import { LoggingService } from '../services/logging.service'
import { Status } from '../enums'

import { IAccount } from '../interfaces'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  constructor (
    private loggingService: LoggingService,
    public accountsService: AccountsService
  ) {}

  ngOnInit (): void {
  }

  @Input() account: IAccount
  status = Status
  onSetTo (status: string): void {
    this.accountsService.updateStatus(this.account.id, status)
    // this.loggingService.logStatusChange(status);
  }
}
