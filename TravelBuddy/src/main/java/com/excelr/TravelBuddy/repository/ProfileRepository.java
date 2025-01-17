package com.excelr.TravelBuddy.repository;

import com.excelr.TravelBuddy.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    Profile findByUserId(Long userId);
}
