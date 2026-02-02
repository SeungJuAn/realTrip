package com.travelplanner.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.travelplanner.config.JwtTokenProvider;
import com.travelplanner.entity.User;
import com.travelplanner.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    public String register(String email, String name, String password){
        if(userRepository.findByEmail(email).isPresent()){
            throw new RuntimeException("이미 존재하는 이메일입니다.");
        }
        User user = new User();
        user.setEmail(email);
        user.setName(name);
        user.setPassword(passwordEncoder.encode(password));
        user.setProvider("local");
        user.setProviderId("local");
        return jwtTokenProvider.createToken(user.getId(), user.getEmail());
    }

    public String login(String email, String password){
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("이메일 혹은 비밀번호가 올바르지 않습니다."));
        if(user.getPassword() == null || !passwordEncoder.matches(password, user.getPassword())){
            throw new RuntimeException("이메일 혹은 비밀번호가 올바르지 않습니다.");
        }
        return jwtTokenProvider.createToken(user.getId(), user.getEmail());
    }
}
