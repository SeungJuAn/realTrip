package com.travelplanner.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travelplanner.dto.TripRequest;
import com.travelplanner.entity.Trip;
import com.travelplanner.service.TripService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;



@RestController
@RequiredArgsConstructor
@RequestMapping("/api/trips")
public class TripController {
    private final TripService tripService;
    @GetMapping("/")
    public List<Trip> getTripList(@AuthenticationPrincipal Long userId){
        return tripService.getMyTrips(userId);
    }

    @GetMapping("/{id}")
    public Trip getTrip(@PathVariable Long id, @AuthenticationPrincipal Long userId) {
        return tripService.getTrip(id, userId);
    }

    @PostMapping("/")
    public Trip createTrip(@AuthenticationPrincipal Long userId,@RequestBody TripRequest newTrip) {
        //TODO: process POST request
        Trip trip = new Trip();
        trip.setTitle(newTrip.getTitle());
        trip.setDescription(newTrip.getDescription());
        trip.setStartDate(newTrip.getStartDate());
        trip.setEndDate(newTrip.getEndDate());

        return tripService.createTrip(trip, userId);
    }

    @PostMapping("/update/{id}")
    public Trip updateTrip(@PathVariable Long id,@AuthenticationPrincipal Long userId,@RequestBody Trip updateTrip) {
        Trip trip = new Trip();
        trip.setTitle(updateTrip.getTitle());
        trip.setDescription(updateTrip.getDescription());
        trip.setStartDate(updateTrip.getStartDate());
        trip.setEndDate(updateTrip.getEndDate());

        return tripService.updateTrip(id, trip, userId);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTrip(@PathVariable Long id ,@AuthenticationPrincipal Long userId) {
        tripService.deleteTrip(id, userId);
        return ResponseEntity.noContent().build();
    }
    
    
    
    
    
    
}
