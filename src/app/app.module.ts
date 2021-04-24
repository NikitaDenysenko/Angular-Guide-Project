import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpComponent } from './topics/1-components-databinding/cmp/cmp.component';
import { CockpitComponent } from './topics/1-components-databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './topics/1-components-databinding/server-element/server-element.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
