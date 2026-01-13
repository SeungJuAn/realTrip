package com.travelplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travelplanner.entity.Place;

public interface PlaceRespository extends JpaRepository<Place, Long> {
    
    
}
