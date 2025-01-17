package com.excelr.TravelBuddy.controller;

import com.excelr.TravelBuddy.model.Recommendation;
import com.excelr.TravelBuddy.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recommendations")
public class RecommendationController {

    @Autowired
    private RecommendationService recommendationService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Recommendation>> getRecommendationsByUser(@PathVariable Long userId) {
        List<Recommendation> recommendations = recommendationService.getRecommendationsByUser(userId);
        return ResponseEntity.ok(recommendations);
    }
}
