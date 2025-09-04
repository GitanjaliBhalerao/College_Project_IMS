import { Component, OnInit } from '@angular/core';
import { IncidentModel } from '../Incident.model';
import { IncidentService } from '../Incident.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  incidents: IncidentModel[] = [];
  chart: any;

  constructor(private incidentService: IncidentService) { }

  ngOnInit() {
    this.incidentService.getIncidents().subscribe(data => {
      this.incidents = data;
      this.createChart();
    });
  }

  createChart() {
    const openCount = this.incidents.filter(i => i.status === 'Open').length;
    const inProgressCount = this.incidents.filter(i => i.status === 'In Progress').length;
    const resolvedCount = this.incidents.filter(i => i.status === 'Resolved').length;
    const totalCount = openCount + inProgressCount + resolvedCount

    this.chart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Open', 'In Progress', 'Resolved'],
        datasets: [{
          data: [openCount, inProgressCount, resolvedCount],
          backgroundColor: ['white', 'black', 'brown']
        }]
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
            position: 'top',
            display: false
          },
          title: {
            display: false,
            text: 'Incident Status Overview'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Status of the Incidents'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Total Count'
            },
            suggestedMin: 0,
            suggestedMax: totalCount,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    })
  }
}
