package com.excelr.TravelBuddy.model;

import jakarta.persistence.*;

@Entity
public class TravelBio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int countriesVisited;
    private int tripsCompleted;
    private int milesTravelled;

    @OneToOne
    private User user;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getCountriesVisited() {
        return countriesVisited;
    }

    public void setCountriesVisited(int countriesVisited) {
        this.countriesVisited = countriesVisited;
    }

    public int getTripsCompleted() {
        return tripsCompleted;
    }

    public void setTripsCompleted(int tripsCompleted) {
        this.tripsCompleted = tripsCompleted;
    }

    public int getMilesTravelled() {
        return milesTravelled;
    }

    public void setMilesTravelled(int milesTravelled) {
        this.milesTravelled = milesTravelled;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
