package com.excelr.TravelBuddy.repository;

import com.excelr.TravelBuddy.model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BudgetRepository extends JpaRepository<Budget, Long> {
    Budget findByUserId(Long userId);
}
