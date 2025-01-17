package com.excelr.TravelBuddy.model;

public class Notification {
    private String type; // e.g., flight update, weather alert
    private String message;
    private String timestamp;

    // Constructor, Getters, and Setters
    public Notification(String type, String message, String timestamp) {
        this.type = type;
        this.message = message;
        this.timestamp = timestamp;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}
