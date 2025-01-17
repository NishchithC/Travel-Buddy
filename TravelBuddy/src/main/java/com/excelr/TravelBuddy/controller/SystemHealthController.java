package com.excelr.TravelBuddy.controller;

import com.excelr.TravelBuddy.model.SystemHealth;
import com.excelr.TravelBuddy.service.SystemHealthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/systemhealth")
public class SystemHealthController {

    @Autowired
    private SystemHealthService systemHealthService;

    @GetMapping
    public ResponseEntity<?> getSystemHealth() {
        SystemHealth systemHealth = systemHealthService.getSystemHealth();
        return ResponseEntity.ok(systemHealth);
    }
}
