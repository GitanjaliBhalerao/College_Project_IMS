import { Component } from '@angular/core';
import { IncidentService } from '../Incident.service';
import { IncidentModel } from '../Incident.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css']
})
export class AddIncidentComponent {
  incident: IncidentModel = { id: 0, title: '', description: '', status: '', priority: 'Low' };
  notification: string = '';
  showNotification: boolean = false;

  constructor(private incidentService: IncidentService) { }
  createIncident(incidentForm: NgForm) {
    if (!this.incident.status || !this.incident.priority || !this.incident.title || !this.incident.description) {
      this.showSuccessNotification('Please enter all fields.');
      return;
    }
    this.incidentService.addIncident(this.incident).subscribe(response => {

      console.log('Incident created:', response);
      this.showSuccessNotification('Incident has been created!');
      incidentForm.resetForm();
      this.incident = { id: 0, title: '', description: '', status: '', priority: 'Low' };
    }, error => {
      console.error('Error creating incident:', error);
    });
  }

  showSuccessNotification(message: string) {
    this.notification = message;
    this.showNotification = true;

    setTimeout(() => {
      this.showNotification = false;
      this.notification = '';
    }, 3000);
  }
}
