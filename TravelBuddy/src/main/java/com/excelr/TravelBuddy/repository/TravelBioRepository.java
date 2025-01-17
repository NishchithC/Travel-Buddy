package com.excelr.TravelBuddy.repository;

import com.excelr.TravelBuddy.model.TravelBio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TravelBioRepository extends JpaRepository<TravelBio, Long> {
    TravelBio findByUserId(Long userId);
}
