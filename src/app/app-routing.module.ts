import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NeuPageComponent} from './neu-page/neu-page.component';
import {TablePageComponent} from './table-page/table-page.component';
import {CardPageComponent} from './card-page/card-page.component'
import {JupyterEmbedComponent} from './jupyter-embed/jupyter-embed.component'

const routes: Routes = [
  { path: 'neupage', component: NeuPageComponent },
  { path: 'tablepage', component: TablePageComponent },
  { path: 'cardpage', component: CardPageComponent },
  { path: 'jupyter', component: JupyterEmbedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
