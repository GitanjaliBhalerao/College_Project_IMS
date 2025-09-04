package com.example.Final_Project_Backend.controller;


import com.example.Final_Project_Backend.model.Incident;
import com.example.Final_Project_Backend.service.IncidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/incidents")
public class IncidentController {

    @Autowired
    private IncidentService incidentService;

    @GetMapping
    public List<Incident> getAllIncidents() {
        return incidentService.getAllIncidents();
    }

    @PostMapping("/add-incident")
    public ResponseEntity<Incident> createIncident(@RequestBody Incident incident) {
        Incident createdIncident = incidentService.createIncident(incident);
        return ResponseEntity.ok(createdIncident);
    }
    
    @DeleteMapping("/delete/{id}")
    public void deleteIncident(@PathVariable Long id) {
    	incidentService.deleteIncident(id);
    }
    
    @PutMapping("/update/{id}")
    public void updateIncident(@PathVariable Long id, @RequestBody Incident incident) {
    	incidentService.updateIncident(id, incident);
    }
   
    
}
