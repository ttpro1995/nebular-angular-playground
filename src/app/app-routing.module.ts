import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NeuPageComponent} from './neu-page/neu-page.component';
import {TablePageComponent} from './table-page/table-page.component';
import {CardPageComponent} from './card-page/card-page.component'
import {TabPageComponent} from './tab-page/tab-page.component';

const routes: Routes = [
  { path: 'neupage', component: NeuPageComponent },
  { path: 'tablepage', component: TablePageComponent },
  { path: 'cardpage', component: CardPageComponent },
  { path: 'tabpage', component: TabPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
