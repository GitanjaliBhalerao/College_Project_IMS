import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IncidentModel } from '../Incident.model';
import { IncidentService } from '../Incident.service';

@Component({
  selector: 'app-edit-incident-dialog',
  templateUrl: './edit-incident-dialog.component.html',
  styleUrls: ['./edit-incident-dialog.component.css']
})
export class EditIncidentDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditIncidentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IncidentModel,
    private incidentService: IncidentService
  ) { }

  onSubmit(): void {
    this.incidentService.updateIncident(this.data.id, this.data).subscribe(() => {
      this.dialogRef.close(this.data);
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
