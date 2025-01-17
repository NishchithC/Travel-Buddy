package com.excelr.TravelBuddy.service;

import com.excelr.TravelBuddy.model.Weather;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class WeatherService {

    private final RestTemplate restTemplate;
    private final String apiKey = "508599f87f5689927dd9f66656368616";  // Replace with your actual API key

    @Autowired
    public WeatherService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public Weather getWeather(String city) {
        String url = String.format("https://api.openweathermap.org/data/2.5/weather?q=%s&appid=%s", city, apiKey);
        try {
            return restTemplate.getForObject(url, Weather.class);
        } catch (HttpClientErrorException e) {
            // Handle exception (e.g., invalid API key or city not found)
            System.out.println("Error: " + e.getMessage());
            return null;
        }
    }
}
