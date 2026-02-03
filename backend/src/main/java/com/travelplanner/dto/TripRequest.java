package com.travelplanner.dto;

import java.time.LocalDateTime;
import java.util.Date;

import lombok.Data;

@Data
public class TripRequest {
    // private Long tripId;
    private String title;
    private String description;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
}
