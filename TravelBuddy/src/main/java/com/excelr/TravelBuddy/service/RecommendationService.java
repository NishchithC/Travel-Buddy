package com.excelr.TravelBuddy.service;

import com.excelr.TravelBuddy.model.Recommendation;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;

@Service
public class RecommendationService {
    // Dummy implementation, replace with actual logic
    public List<Recommendation> getRecommendationsByUser(Long userId) {
        // Logic to fetch recommendations based on user preferences and location
        return new ArrayList<>();
    }
}
