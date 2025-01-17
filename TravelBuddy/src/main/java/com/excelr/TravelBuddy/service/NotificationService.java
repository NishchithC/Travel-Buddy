package com.excelr.TravelBuddy.service;

import com.excelr.TravelBuddy.model.Notification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;

@Service
public class NotificationService {
    // Dummy implementation, replace with actual logic
    public List<Notification> getNotificationsByUser(Long userId) {
        // Logic to fetch notifications based on user preferences and location
        return new ArrayList<>();
    }
}
