import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CmpComponent } from './topics/1-components-databinding/cmp/cmp.component'
import { CockpitComponent } from './topics/1-components-databinding/cockpit/cockpit.component'
import { ServerElementComponent } from './topics/1-components-databinding/server-element/server-element.component'

import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext'
import { MainDirectivesComponent } from './topics/2-directives/main-directives/main-directives.component'
import { BasicHighlightDirective } from './topics/2-directives/directives/attribute/basic-highlight.directive'
import { BetterHighlightDirective } from './topics/2-directives/directives/attribute/better-highlight.directive'
import { UnlessDirective } from './topics/2-directives/directives/structural/unless.directive'
import { RendererDirective } from './topics/2-directives/directives/attribute/renderer.directive'
import { HostlistenerDirective } from './topics/2-directives/directives/attribute/hostlistener.directive'
import { MainServicesComponent } from './topics/3-services/main-services/main-services.component'
import { NewAccountComponent } from './topics/3-services/new-account/new-account.component'
import { AccountComponent } from './topics/3-services/account/account.component'
import { AccountsService } from './topics/3-services/services/accounts.service'
import { LoggingService } from './topics/3-services/services/logging.service'
import { IdService } from './topics/3-services/services/id.service'
import { HomeComponent } from './topics/4-routes/home/home.component'
import { ServersComponent } from './topics/4-routes/servers/servers.component'
import { UsersComponent } from './topics/4-routes/users/users.component'
import { EditServerComponent } from './topics/4-routes/servers/edit-server/edit-server.component'
import { ServerComponent } from './topics/4-routes/servers/server/server.component'
import { UserComponent } from './topics/4-routes/users/user/user.component'
import { MainRoutesComponent } from './topics/4-routes/main-routes/main-routes.component'
import { ServersService } from './topics/4-routes/servers/servers.service'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'servers', component: ServersComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CmpComponent,
    CockpitComponent,
    ServerElementComponent,
    MainDirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    RendererDirective,
    HostlistenerDirective,
    MainServicesComponent,
    NewAccountComponent,
    AccountComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,
    MainRoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AccountsService, LoggingService, IdService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
