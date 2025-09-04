import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IncidentModel } from '../Incident.model';
import { IncidentService } from '../Incident.service';
import { EditIncidentDialogComponent } from '../edit-incident-dialog/edit-incident-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {
  incidents: IncidentModel[] = [];

  constructor(private incidentService: IncidentService, public dialog: MatDialog) { }

  ngOnInit() {
    this.incidentService.getIncidents().subscribe(data => {
      this.incidents = data;
      this.sortIncidentsByPriority();
    });
  }

  private sortIncidentsByPriority() {
    const priorityMap = {
      "High": 1,
      "Medium": 2,
      "Low": 3
    };

    this.incidents.sort((a, b) => {
      const priorityA = priorityMap[a.priority] ?? Number.MAX_VALUE;
      const priorityB = priorityMap[b.priority] ?? Number.MAX_VALUE;
      return priorityA - priorityB;
    });
  }

  editIncident(incident: IncidentModel) {
    const dialogRef = this.dialog.open(EditIncidentDialogComponent, {
      data: { ...incident }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.incidents.findIndex(i => i.id === result.id);
        if (index !== -1) {
          this.incidents[index] = result;
        }
      }
    });
  }

  deleteIncident(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.incidentService.deleteIncident(id).subscribe(() => {
          this.incidents = this.incidents.filter(i => i.id !== id);
        });
      }
    });
  }
}
