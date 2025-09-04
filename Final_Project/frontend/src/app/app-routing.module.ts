import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIncidentComponent } from './add-incident/add-incident.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/add-incident', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-incident', component: AddIncidentComponent },
  { path: 'incident-list', component: IncidentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
