import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIncidentComponent } from './add-incident/add-incident.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EditIncidentDialogComponent } from './edit-incident-dialog/edit-incident-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddIncidentComponent,
    IncidentListComponent,
    EditIncidentDialogComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }