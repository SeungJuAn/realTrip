package com.travelplanner.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travelplanner.dto.Auth;
import com.travelplanner.service.AuthService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Auth auth) {
        String token = authService.login(auth.getEmail(), auth.getPassword());
        return Map.of("token", token);
    }

    @PostMapping("/register")
    public Map<String, String> signUp(@RequestBody Auth auth) {
        String token = authService.register(auth.getEmail(), auth.getName(), auth.getPassword());
        return Map.of("token", token);
    }
    
    
}
