package com.excelr.TravelBuddy.controller;

import com.excelr.TravelBuddy.model.Budget;
import com.excelr.TravelBuddy.model.Expense;
import com.excelr.TravelBuddy.repository.BudgetRepository;
import com.excelr.TravelBuddy.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/budgetplanner")
public class BudgetPlannerController {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private BudgetRepository budgetRepository;

    @GetMapping("/expenses/{userId}")
    public ResponseEntity<List<Expense>> getExpensesByUser(@PathVariable Long userId) {
        List<Expense> expenses = expenseRepository.findByUserId(userId);
        return ResponseEntity.ok(expenses);
    }

    @PostMapping("/expenses")
    public ResponseEntity<Expense> addExpense(@RequestBody Expense expense) {
        Expense savedExpense = expenseRepository.save(expense);
        return ResponseEntity.ok(savedExpense);
    }

    @DeleteMapping("/expenses/{id}")
    public ResponseEntity<?> deleteExpense(@PathVariable Long id) {
        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        expenseRepository.delete(expense);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/budget/{userId}")
    public ResponseEntity<Budget> getBudgetByUser(@PathVariable Long userId) {
        Budget budget = budgetRepository.findByUserId(userId);
        return ResponseEntity.ok(budget);
    }

    @PostMapping("/budget")
    public ResponseEntity<Budget> setBudget(@RequestBody Budget budget) {
        Budget savedBudget = budgetRepository.save(budget);
        return ResponseEntity.ok(savedBudget);
    }
}
