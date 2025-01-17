import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const BudgetPlanner = () => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [expenditure, setExpenditure] = useState(0);
  const [newExpense, setNewExpense] = useState({ name: '', amount: 0 });
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = () => {
    if (newExpense.name && newExpense.amount > 0) {
      setExpenses([...expenses, newExpense]);
      setExpenditure(expenditure + parseFloat(newExpense.amount));
      setNewExpense({ name: '', amount: 0 });
    } else {
      alert('Please enter valid expense details.');
    }
  };

  return (
    <>
      {/* <NavBar /> */}
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <h1>Budget Planner</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ width: '45%' }}>
            <h2>Total Budget</h2>
            <input
              type="number"
              value={totalBudget}
              onChange={(e) => setTotalBudget(parseFloat(e.target.value))}
              style={{
                padding: '10px',
                width: '100%',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ width: '45%' }}>
            <h2>Expenditure</h2>
            <input
              type="number"
              value={expenditure}
              readOnly
              style={{
                padding: '10px',
                width: '100%',
                backgroundColor: '#e0e0e0',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ width: '45%' }}>
            <h3>Budget Overview</h3>
            {/* Placeholder for Pie Chart */}
            <div
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#e0e0e0',
                marginBottom: '10px',
              }}
            ></div>
            {/* Placeholder for Bar Graph */}
            <div style={{ width: '100%', height: '200px', backgroundColor: '#e0e0e0' }}></div>
          </div>
          <div style={{ width: '45%' }}>
            <h3>Add New Expenses</h3>
            <input
              type="text"
              placeholder="Expense name"
              value={newExpense.name}
              onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
              style={{
                padding: '10px',
                marginRight: '10px',
                width: '100%',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
            <input
              type="number"
              placeholder="Amount"
              value={newExpense.amount}
              onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) })}
              style={{
                padding: '10px',
                marginRight: '10px',
                width: '100%',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
            <button
              onClick={handleAddExpense}
              style={{
                padding: '10px',
                backgroundColor: '#00796b',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
                marginTop: '10px',
              }}
            >
              Add Expense
            </button>
          </div>
        </div>

        <div>
          <h3>Expenditure Breakdown</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {expenses.map((expense, index) => (
              <li
                key={index}
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  marginBottom: '5px',
                  backgroundColor: '#f9f9f9',
                }}
              >
                {expense.name}: ${expense.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BudgetPlanner;
