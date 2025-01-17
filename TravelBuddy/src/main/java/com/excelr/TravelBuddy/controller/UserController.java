package com.excelr.TravelBuddy.controller;

import com.excelr.TravelBuddy.model.User;
import com.excelr.TravelBuddy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
//import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
//import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
//import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
//import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
//import com.google.api.client.http.javanet.NetHttpTransport;
//import com.google.api.client.json.jackson2.JacksonFactory;
//import java.util.Collections;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        User existingUser = (User) userRepository.findByEmail(user.getEmail());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            // Send a JSON object with role and other useful data
            Map<String, Object> response = new HashMap<>();
            response.put("role", existingUser.getRole());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        // Check if the email already exists
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.status(400).body("Email already exists");
        }

        // Save the user with the provided role (defaulting to USER if none is provided)
        if (user.getRole() == null) {
            user.setRole(User.Role.USER); // Default role
        }
        User savedUser = userRepository.save(user);

        // Respond with the saved user
        return ResponseEntity.ok(savedUser);
    }


    @GetMapping("/current")
    public ResponseEntity<?> getCurrentUser() {
        // Mocked current user ID for demonstration, replace with actual authentication mechanism
        Long currentUserId = 1L; // Replace with actual logic to fetch current logged-in user ID
        User currentUser = (User) userRepository.findById(currentUserId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(currentUser);
    }

//    @PostMapping("/google-login")
//    public ResponseEntity<?> googleLogin(@RequestBody String idTokenString) {
//        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), JacksonFactory.getDefaultInstance())
//                .setAudience(Collections.singletonList("YOUR_GOOGLE_CLIENT_ID"))
//                .build();
//
//        GoogleIdToken idToken;
//        try {
//            idToken = verifier.verify(idTokenString);
//        } catch (Exception e) {
//            return ResponseEntity.status(401).body("Invalid Google ID token");
//        }
//
//        if (idToken != null) {
//            Payload payload = idToken.getPayload();
//            String email = payload.getEmail();
//            User user = (User) userRepository.findByEmail(email);
//            if (user == null) {
//                user = new User();
//                user.setEmail(email);
//                user.setRole(User.Role.USER); // Ensure role assignment is correct
//                userRepository.save(user);
//            }
//            return ResponseEntity.ok(user.getRole());
//        } else {
//            return ResponseEntity.status(401).body("Invalid Google ID token");
//        }
//    }
}