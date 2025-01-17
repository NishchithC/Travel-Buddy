package com.excelr.TravelBuddy.model;

public class RevenueOverview {
    private int totalRevenue;
    private String trend;

    public RevenueOverview(int totalRevenue, String trend) {
        this.totalRevenue = totalRevenue;
        this.trend = trend;
    }

    // Getters and Setters
    public int getTotalRevenue() {
        return totalRevenue;
    }

    public void setTotalRevenue(int totalRevenue) {
        this.totalRevenue = totalRevenue;
    }

    public String getTrend() {
        return trend;
    }

    public void setTrend(String trend) {
        this.trend = trend;
    }
}
