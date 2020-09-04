import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabPageComponent} from './tab-page.component';
import {TablePageComponent} from './table-page/table-page.component';
import {NeuPageComponent} from './neu-page/neu-page.component';

const routes: Routes = [
  {
    path: '',
    component: TabPageComponent,
    children: [
      {
        path: 'tablepage',
        component: TablePageComponent,
      }, {
        path: 'neupage',
        component: NeuPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TabPageRoutingModule {
}

