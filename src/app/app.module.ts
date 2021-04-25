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

@NgModule({
  declarations: [
    AppComponent,
    CmpComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
