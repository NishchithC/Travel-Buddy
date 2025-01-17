package com.excelr.TravelBuddy.service;

import com.excelr.TravelBuddy.model.RevenueOverview;
import org.springframework.stereotype.Service;

@Service
public class RevenueService {
    // Dummy implementation, replace with actual logic
    public RevenueOverview getRevenueOverview() {
        // Logic to fetch and calculate revenue overview
        return new RevenueOverview(10000, "Upward");
    }
}
