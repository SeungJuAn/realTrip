package com.travelplanner.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travelplanner.entity.Collaborator;
import com.travelplanner.entity.Trip;
import com.travelplanner.entity.User;

public interface CollaboratorRepository extends JpaRepository<Collaborator, Long>{
    List<Collaborator> findByTrip(Trip trip);
    List<Collaborator> findByUser(User user);
    Optional<Collaborator> findByTripAndUser(Trip trip, User user);
}
