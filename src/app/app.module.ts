import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbCardModule, NbMenuModule, NbTreeGridModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NeuPageComponent } from './neu-page/neu-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { CardPageComponent } from './card-page/card-page.component';
import { JupyterEmbedComponent } from './jupyter-embed/jupyter-embed.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { TreegridComponent } from './treegrid/treegrid.component';

@NgModule({
  declarations: [
    AppComponent,
    NeuPageComponent,
    TablePageComponent,
    CardPageComponent,
    JupyterEmbedComponent,
    SidebarContentComponent,
    TreegridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbTreeGridModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
