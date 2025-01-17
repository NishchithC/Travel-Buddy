package com.excelr.TravelBuddy.service;

import com.excelr.TravelBuddy.model.Booking;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookingService {
    // Dummy implementation, replace with actual logic
    public long countActiveBookings() {
        // Logic to count active bookings
        return 150;
    }

    public List<Booking> searchBookings(String query) { // Logic to search for bookings based on the query r
        return new ArrayList<>();
    }

    public Booking createBooking(Booking booking) {
        // Logic to create a new booking
        return booking;
    }
}