import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbCardModule, NbRouteTabsetModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NeuPageComponent } from './neu-page/neu-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { CardPageComponent } from './card-page/card-page.component';
import { TabPageComponent } from './tab-page/tab-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NeuPageComponent,
    TablePageComponent,
    CardPageComponent,
    TabPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbEvaIconsModule,
    NbRouteTabsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
