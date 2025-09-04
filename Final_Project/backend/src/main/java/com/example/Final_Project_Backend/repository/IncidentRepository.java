package com.example.Final_Project_Backend.repository;

import com.example.Final_Project_Backend.model.Incident;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface IncidentRepository extends JpaRepository<Incident, Long> {
}
