import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NeuPageComponent} from './neu-page/neu-page.component'

const routes: Routes = [
  { path: 'neupage', component: NeuPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
