import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbToggleModule,
  NbUserModule,
  NbAccordionModule,
  NbListModule, NbToastrModule, NbProgressBarModule, NbTabsetModule, NbTreeGridModule, NbSpinnerModule, NbRouteTabsetModule,
} from '@nebular/theme';

import { TabPageRoutingModule } from './tab-page-routing.module';
import {FormsModule as ngFormsModule, ReactiveFormsModule} from '@angular/forms';
import {NeuPageComponent} from './neu-page/neu-page.component';
import {TablePageComponent} from './table-page/table-page.component';
import {TabPageComponent} from './tab-page.component';

@NgModule({
  imports: [
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    TabPageRoutingModule,
    NbSelectModule,
    NbToggleModule,
    NbIconModule,
    ngFormsModule,
    NbAccordionModule,
    NbListModule,
    ReactiveFormsModule,
    NbToastrModule,
    NbProgressBarModule,
    NbTabsetModule,
    NbTreeGridModule,
    NbSpinnerModule,
    NbRouteTabsetModule
  ],
  declarations: [
    TabPageComponent,
    NeuPageComponent,
    TablePageComponent
  ],
})
export class TabPageModule { }
