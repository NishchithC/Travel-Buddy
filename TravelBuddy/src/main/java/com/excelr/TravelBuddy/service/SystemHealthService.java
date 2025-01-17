package com.excelr.TravelBuddy.service;

import com.excelr.TravelBuddy.model.SystemHealth;
import org.springframework.stereotype.Service;

@Service
public class SystemHealthService {
    // Dummy implementation, replace with actual logic
    public SystemHealth getSystemHealth() {
        // Logic to fetch system health metrics
        return new SystemHealth(99.9, 200, 0.01, 500);
    }
}
