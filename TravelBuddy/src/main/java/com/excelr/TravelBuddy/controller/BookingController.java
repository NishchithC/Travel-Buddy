package com.excelr.TravelBuddy.controller;

import com.excelr.TravelBuddy.model.Booking;
import com.excelr.TravelBuddy.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/active")
    public ResponseEntity<?> getTotalActiveBookings() {
        long totalActiveBookings = bookingService.countActiveBookings();
        return ResponseEntity.ok(totalActiveBookings);
    }
    @GetMapping("/search")
    public ResponseEntity<List<Booking>> searchBookings(@RequestParam String query)
    {
        List<Booking> bookings = bookingService.searchBookings(query);
        return ResponseEntity.ok(bookings);
    }
    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking)
    { Booking savedBooking = bookingService.createBooking(booking);
        return ResponseEntity.ok(savedBooking);}
}
