package com.excelr.TravelBuddy.model;

public class Recommendation {
    private String type; // e.g., activity, restaurant, POI
    private String name;
    private String description;

    // Constructor, Getters, and Setters
    public Recommendation(String type, String name, String description) {
        this.type = type;
        this.name = name;
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
