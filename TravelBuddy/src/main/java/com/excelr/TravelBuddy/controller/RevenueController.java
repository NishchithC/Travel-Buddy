package com.excelr.TravelBuddy.controller;

import com.excelr.TravelBuddy.model.RevenueOverview;
import com.excelr.TravelBuddy.service.RevenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/revenue")
public class RevenueController {

    @Autowired
    private RevenueService revenueService;

    @GetMapping("/overview")
    public ResponseEntity<?> getRevenueOverview() {
        RevenueOverview revenueOverview = revenueService.getRevenueOverview();
        return ResponseEntity.ok(revenueOverview);
    }
}
