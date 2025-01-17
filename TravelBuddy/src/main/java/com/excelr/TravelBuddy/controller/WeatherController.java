package com.excelr.TravelBuddy.controller;

import com.excelr.TravelBuddy.model.Weather;
import com.excelr.TravelBuddy.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping
    public Weather getWeather(@RequestParam String city) {
        return weatherService.getWeather(city);
    }
}
