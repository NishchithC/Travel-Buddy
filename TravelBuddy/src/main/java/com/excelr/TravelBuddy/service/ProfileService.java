package com.excelr.TravelBuddy.service;

import com.excelr.TravelBuddy.model.Profile;
import com.excelr.TravelBuddy.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile getProfileByUserId(Long userId) {
        return profileRepository.findByUserId(userId);
    }
}
