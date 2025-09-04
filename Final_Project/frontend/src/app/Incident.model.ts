export interface IncidentModel {
  id: number;
  title: string;
  description: string;
  status: '' | 'Open' | 'In Progress' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High';
  createdAt?: string;
}
