package com.travelplanner.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travelplanner.entity.Trip;
import com.travelplanner.entity.User;

public interface TripRepository extends JpaRepository<Trip, Long>{
    List<Trip> findByOwnerOrderByCreatedAtDesc(User Owner);
    
    
}
