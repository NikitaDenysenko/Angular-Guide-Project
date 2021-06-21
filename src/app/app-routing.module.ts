import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './topics/4-routes/home/home.component';
import { PageNotFoundComponent } from './topics/4-routes/page-not-found/page-not-found.component';
import { EditServerComponent } from './topics/4-routes/servers/edit-server/edit-server.component';
import { ServerComponent } from './topics/4-routes/servers/server/server.component';
import { ServersComponent } from './topics/4-routes/servers/servers.component';
import { UserComponent } from './topics/4-routes/users/user/user.component';
import { UsersComponent } from './topics/4-routes/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }]
  },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
