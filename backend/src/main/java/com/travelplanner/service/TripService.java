package com.travelplanner.service;

import java.util.List;


import org.springframework.stereotype.Service;

import com.travelplanner.entity.Trip;
import com.travelplanner.entity.User;
import com.travelplanner.repository.TripRepository;
import com.travelplanner.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TripService {
    private final TripRepository tripRepository;
    private final UserRepository userRepository;
    // 내 여행 계획 리스트 가져오기
    public List<Trip> getMyTrips(Long userId){
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));
        return tripRepository.findByOwnerOrderByCreatedAtDesc(user);
    }
    // 단일 여행계획서 get
    public Trip getTrip(Long tripId, Long userId){
        Trip trip = tripRepository.findById(tripId)
                    .orElseThrow(() -> new RuntimeException("해당 여행 계획를 찾을 수 없습니다"));
        if(!trip.getOwner().getId().equals(userId)){
            throw new RuntimeException("접근 권한이 없습니다");
        }
        return trip;
    }
    // 생성
    public Trip createTrip(Trip trip, Long userId){
        User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));
        trip.setOwner(user);

        return tripRepository.save(trip);
    }

    public Trip updateTrip(Long tripId, Trip trip, Long userId){
        Trip userTrip = getTrip(tripId, userId);
        userTrip.setTitle(trip.getTitle());
        userTrip.setStartDate(trip.getStartDate());
        userTrip.setEndDate(trip.getEndDate());
        userTrip.setDescription(trip.getDescription());
        return tripRepository.save(userTrip);
    }

    public void deleteTrip(Long tripId, Long userId){
        Trip trip = getTrip(tripId, userId);
        tripRepository.delete(trip);
    }
}
