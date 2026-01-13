package com.travelplanner.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travelplanner.entity.Trip;
import com.travelplanner.entity.User;

public interface TripRepository extends JpaRepository<Trip, Long>{
    Optional<Trip> findByOwnerOrderByCreateAtDesc(User Owner);
    
    
}
