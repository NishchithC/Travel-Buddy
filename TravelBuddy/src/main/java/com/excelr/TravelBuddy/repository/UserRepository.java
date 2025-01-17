package com.excelr.TravelBuddy.repository;


import com.excelr.TravelBuddy.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    @Query(value = "SELECT COUNT(*) FROM user WHERE active = true", nativeQuery = true) long countActiveUsers();
}
