import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './layout/login/login.component';

import { ActivePivotsComponent } from './modules/active-pivots/active-pivots.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'active-pivots',
        component: ActivePivotsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
