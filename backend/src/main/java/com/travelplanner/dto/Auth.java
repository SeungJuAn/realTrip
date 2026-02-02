package com.travelplanner.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class Auth {
    
    private String email;
    private String password;
    private String name;
}
