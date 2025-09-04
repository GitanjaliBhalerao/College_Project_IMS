import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IncidentModel } from './Incident.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private baseUrl = 'http://localhost:8080/api/incidents';

  constructor(private http: HttpClient) { }

  getIncidents(): Observable<IncidentModel[]> {
    return this.http.get<IncidentModel[]>(this.baseUrl);
  }

  addIncident(incident: IncidentModel): Observable<IncidentModel> {
    return this.http.post<IncidentModel>(`${this.baseUrl}/add-incident`, incident);
  }

  deleteIncident(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  updateIncident(id: number, incident: IncidentModel): Observable<IncidentModel> {
    return this.http.put<IncidentModel>(`${this.baseUrl}/update/${id}`, incident);
  }
}
