// src/components/CardTransactionForm.js
import React, { useState } from 'react';

const CardTransaction = () => {
    const [transaction, setTransaction] = useState({
        transactionID: '',
        cardID: '',
        transactionDate: '',
        amount: '',
        merchant: '',
        transactionTypeID: '',
        location: '',
        currency: 'USD'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction({ ...transaction, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(transaction); // Replace with API call later
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Card Transaction</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="transactionID" className="block text-sm font-medium">Transaction ID</label>
                    <input type="text" name="transactionID" 
                    placeholder='Enter Transaction ID'
                    value={transaction.transactionID} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="cardID" className="block text-sm font-medium">Card ID</label>
                    <input type="text" name="cardID" 
                    placeholder='Enter Card ID'
                    value={transaction.cardID} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="transactionDate" className="block text-sm font-medium">Transaction Date</label>
                    <input type="date" name="transactionDate" 
                    value={transaction.transactionDate} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium">Amount</label>
                    <input type="number" name="amount" 
                    placeholder='Enter Amount'
                    value={transaction.amount} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="merchant" className="block text-sm font-medium">Merchant</label>
                    <input type="text" name="merchant" 
                    placeholder='Enter Merchant'
                    value={transaction.merchant} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="transactionTypeID" className="block text-sm font-medium">Transaction Type ID</label>
                    <input type="text" name="transactionTypeID" 
                    placeholder='Enter Transaction Type ID'
                    value={transaction.transactionTypeID} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium">Location</label>
                    <input type="text" name="location" 
                    placeholder='Enter Location'
                    value={transaction.location} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="currency" className="block text-sm font-medium">Currency</label>
                    <select name="currency" value={transaction.currency} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>
                <div className="mt-6 text-center">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200">Submit Transaction</button>
                </div>
            </form>
        </div>
    );
};

export default CardTransaction;
