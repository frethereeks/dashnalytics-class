// src/WalletPage.js

import React, { useState } from 'react';
import './Wallet.css';

function WalletPage() {
  const [balance, setBalance] = useState(1000); // Example initial balance
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Deposit', amount: 500, date: '2024-06-20' },
    { id: 2, type: 'Withdrawal', amount: 200, date: '2024-06-18' },
  ]);

  const handleTransaction = (type) => {
    const transactionAmount = parseFloat(amount);
    if (!transactionAmount || transactionAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    const newBalance = type === 'Deposit' ? balance + transactionAmount : balance - transactionAmount;
    if (newBalance < 0) {
      alert('Insufficient balance');
      return;
    }

    const newTransaction = {
      id: transactions.length + 1,
      type,
      amount: transactionAmount,
      date: new Date().toISOString().split('T')[0],
    };

    setBalance(newBalance);
    setTransactions([newTransaction, ...transactions]);
    setAmount('');
  };

  return (
    <div className="wallet-container">
      <h2>Wallet Page</h2>
      <div className="balance-section">
        <h3>Balance: ${balance.toFixed(2)}</h3>
      </div>
      <div className="transaction-section">
        <h3>Recent Transactions</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <span>{transaction.date}</span>
              <span>{transaction.type}</span>
              <span>${transaction.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="form-section">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <button onClick={() => handleTransaction('Deposit')}>Deposit</button>
        <button onClick={() => handleTransaction('Withdrawal')}>Withdraw</button>
      </div>
    </div>
  );
}

export default WalletPage;
