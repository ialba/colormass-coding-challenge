import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpModule } from '@angular/http';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule
 } from '@angular/material';
import { MaterialsListComponent } from './components/materials-list/materials-list.component';
import { MaterialComponent } from './components/material/material.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MaterialService } from '../app/services/material.service';
import { MaterialModalComponent, DialogOverviewExampleDialog } from './components/material-modal/material-modal.component';

const appRoutes: Routes = [
  { path: 'modal/:id', component: MaterialModalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaterialsListComponent,
    MaterialComponent,
    MaterialModalComponent,
    DialogOverviewExampleDialog,
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatGridListModule
  ],
  providers: [ MaterialService ],
  bootstrap: [AppComponent],
  entryComponents: [MaterialModalComponent, DialogOverviewExampleDialog],
})
export class AppModule { }
