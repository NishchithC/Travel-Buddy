package com.excelr.TravelBuddy.controller;

import com.excelr.TravelBuddy.model.SystemAlert;
import com.excelr.TravelBuddy.service.AlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/alerts")
public class AlertController {

    @Autowired
    private AlertService alertService;

    @GetMapping
    public ResponseEntity<?> getSystemAlerts() {
        List<SystemAlert> alerts = alertService.getSystemAlerts();
        return ResponseEntity.ok(alerts);
    }
}
