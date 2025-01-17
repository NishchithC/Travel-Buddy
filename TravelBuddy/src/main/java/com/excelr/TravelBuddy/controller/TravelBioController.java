package com.excelr.TravelBuddy.controller;

import com.excelr.TravelBuddy.model.TravelBio;
import com.excelr.TravelBuddy.repository.TravelBioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/travelbio")
public class TravelBioController {

    @Autowired
    private TravelBioRepository travelBioRepository;

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getTravelBioByUser(@PathVariable Long userId) {
        TravelBio travelBio = travelBioRepository.findByUserId(userId);
        if (travelBio != null) {
            return ResponseEntity.ok(travelBio);
        } else {
            return ResponseEntity.status(404).body("Travel Bio not found");
        }
    }
}
