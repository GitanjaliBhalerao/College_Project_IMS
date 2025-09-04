package com.example.Final_Project_Backend.service;



import com.example.Final_Project_Backend.model.Incident;
import com.example.Final_Project_Backend.repository.IncidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class IncidentService {

    @Autowired
    private IncidentRepository incidentRepository;

    public List<Incident> getAllIncidents() {
        return incidentRepository.findAll();
    }

    public Incident createIncident(Incident incident) {
        return incidentRepository.save(incident);
    }
    
    public void deleteIncident(Long incId) {
    	incidentRepository.deleteById(incId);
    }
    
    public void updateIncident(Long id, Incident incident) {
        Optional<Incident> optionalIncident = incidentRepository.findById(id);
        
        if (!optionalIncident.isPresent()) {
            return;
        }
        
        Incident toBeUpdatedIncident = optionalIncident.get();
        
        if (incident.getDescription() != null) {
            toBeUpdatedIncident.setDescription(incident.getDescription());
        }
        if (incident.getTitle() != null) {
            toBeUpdatedIncident.setTitle(incident.getTitle());
        }
        if (incident.getStatus() != null) {
            toBeUpdatedIncident.setStatus(incident.getStatus());
        }
        if (incident.getPriority() != null) {
            toBeUpdatedIncident.setPriority(incident.getPriority());
        }
        
        try {
            incidentRepository.save(toBeUpdatedIncident);
        } catch (Exception e) {
            return;
        }
        
    }

    
}
