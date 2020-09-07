import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardPageComponent} from './card-page/card-page.component';
import {TagInputComponent} from './tag-input/tag-input.component';

const routes: Routes = [
  {
    path: 'tabpage',
    loadChildren: () => import('./tab-page/tab-page.module')
      .then(m => m.TabPageModule),
  },
  { path: 'cardpage', component: CardPageComponent },
  { path: 'taginput', component: TagInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
