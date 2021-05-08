import { Component, OnInit } from '@angular/core'
import { IAccount } from '../interfaces'
import { AccountsService } from '../services/accounts.service'
import { IdService } from '../services/id.service'
import { LoggingService } from '../services/logging.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
  //providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  constructor (
    private loggingService: LoggingService,
    private accountsService: AccountsService,
    private idService: IdService
  ) {}

  ngOnInit (): void {}

  onCreateAccount (accountName: string, accountStatus: string): void {
    const account: IAccount = {
      id: this.idService.getNewId(),
      name: accountName,
      status: accountStatus
    }
    this.accountsService.addAccount(account)
  }
}
