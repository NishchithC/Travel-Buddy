package com.excelr.TravelBuddy.model;

public class SystemHealth {
    private double uptime;
    private int responseTime;
    private double errorRate;
    private int connections;

    public SystemHealth(double uptime, int responseTime, double errorRate, int connections) {
        this.uptime = uptime;
        this.responseTime = responseTime;
        this.errorRate = errorRate;
        this.connections = connections;
    }

    // Getters and Setters
    public double getUptime() {
        return uptime;
    }

    public void setUptime(double uptime) {
        this.uptime = uptime;
    }

    public int getResponseTime() {
        return responseTime;
    }

    public void setResponseTime(int responseTime) {
        this.responseTime = responseTime;
    }

    public double getErrorRate() {
        return errorRate;
    }

    public void setErrorRate(double errorRate) {
        this.errorRate = errorRate;
    }

    public int getConnections() {
        return connections;
    }

    public void setConnections(int connections) {
        this.connections = connections;
    }
}
