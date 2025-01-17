package com.excelr.TravelBuddy.controller;

import com.excelr.TravelBuddy.model.Profile;
import com.excelr.TravelBuddy.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profiles")
public class ProfileController {

    @Autowired
    private ProfileRepository profileRepository;

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getProfileByUser(@PathVariable Long userId) {
        Profile profile = profileRepository.findByUserId(userId);
        if (profile != null) {
            return ResponseEntity.ok(profile);
        } else {
            return ResponseEntity.status(404).body("Profile not found");
        }
    }

    @PostMapping
    public ResponseEntity<?> createProfile(@RequestBody Profile profile) {
        Profile savedProfile = profileRepository.save(profile);
        return ResponseEntity.ok(savedProfile);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProfile(@PathVariable Long id, @RequestBody Profile profileDetails) {
        Profile profile = profileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        profile.setName(profileDetails.getName());
        profile.setCity(profileDetails.getCity());

        Profile updatedProfile = profileRepository.save(profile);
        return ResponseEntity.ok(updatedProfile);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProfile(@PathVariable Long id) {
        Profile profile = profileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        profileRepository.delete(profile);
        return ResponseEntity.ok().build();
    }
}
