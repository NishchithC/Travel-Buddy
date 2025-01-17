package com.excelr.TravelBuddy.controller;

import com.excelr.TravelBuddy.model.Trip;
import com.excelr.TravelBuddy.model.TripWithWeather;
import com.excelr.TravelBuddy.model.Weather;
import com.excelr.TravelBuddy.repository.TripRepository;
import com.excelr.TravelBuddy.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/trips")
public class TripController {

    @Autowired
    private TripRepository tripRepository;
    @Autowired
    private WeatherService weatherService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getTripsByUser(@PathVariable Long userId) {
        List<Trip> trips = tripRepository.findByUserId(userId);
        return ResponseEntity.ok(trips);
    }

//    @PostMapping
//    public ResponseEntity<?> createTrip(@RequestBody Trip trip) {
//        Trip savedTrip = tripRepository.save(trip);
//        return ResponseEntity.ok(savedTrip);
//    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTrip(@PathVariable Long id, @RequestBody Trip tripDetails) {
        Trip trip = tripRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Trip not found"));

        trip.setCity(tripDetails.getCity());
        trip.setDate(tripDetails.getDate());

        Trip updatedTrip = tripRepository.save(trip);
        return ResponseEntity.ok(updatedTrip);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTrip(@PathVariable Long id) {
        Trip trip = tripRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Trip not found"));

        tripRepository.delete(trip);
        return ResponseEntity.ok().build();
    }



        @GetMapping
        public ResponseEntity<List<TripWithWeather>> getAllTrips() {
            List<Trip> trips = tripRepository.findAll();
            List<TripWithWeather> tripsWithWeather = trips.stream()
                    .map(trip -> new TripWithWeather(trip, weatherService.getWeather(trip.getCity())))
                    .collect(Collectors.toList());
            return ResponseEntity.ok(tripsWithWeather);
        }

        @PostMapping
        public ResponseEntity<TripWithWeather> createTrip(@RequestBody Trip trip) {
            Trip savedTrip = tripRepository.save(trip);
            Weather weather = weatherService.getWeather(trip.getCity());
            return ResponseEntity.ok(new TripWithWeather(savedTrip, weather));
        }
    }


