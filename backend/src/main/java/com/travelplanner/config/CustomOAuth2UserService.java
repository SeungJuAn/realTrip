package com.travelplanner.config;

import java.util.Map;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.travelplanner.entity.User;
import com.travelplanner.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {
    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        String provider = userRequest.getClientRegistration().getRegistrationId();
        String providerId = String.valueOf(oAuth2User.getAttributes().get("id"));
        Map<String, Object> kakaoAccount = (Map<String, Object>) oAuth2User.getAttributes().get("kakao_account");
        String email = (String) kakaoAccount.get("email");
        Map<String , Object> profile = (Map<String, Object>) kakaoAccount.get("profile");

        String name = (String) kakaoAccount.get("nickname");
        User user = userRepository.findByProviderAndProviderId(provider, providerId)
         .orElseGet(() -> {
                      User newUser = new User();
                      newUser.setProvider(provider);
                      newUser.setProviderId(providerId);
                      newUser.setEmail(email);
                      newUser.setName(name);
                      return userRepository.save(newUser);
                  });

        return oAuth2User;
    }
    
    
}
