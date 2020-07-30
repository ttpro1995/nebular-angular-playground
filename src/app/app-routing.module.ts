import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardPageComponent} from './card-page/card-page.component';

const routes: Routes = [
  {
    path: 'tabpage',
    loadChildren: () => import('./tab-page/tab-page.module')
      .then(m => m.TabPageModule),
  },
  { path: 'cardpage', component: CardPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
