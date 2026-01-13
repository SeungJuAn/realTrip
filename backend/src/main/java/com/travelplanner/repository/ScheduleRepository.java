package com.travelplanner.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travelplanner.entity.Schedule;
import com.travelplanner.entity.Trip;

public interface ScheduleRepository extends JpaRepository<Schedule, Long>{
    Optional<Schedule> findByTripOrderByDateAscOrderIndexAsc(Trip trip);
    
}
