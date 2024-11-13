// src/components/ATMTransactionForm.js
import React, { useState } from 'react';

const ATMTransaction = () => {
    const [transaction, setTransaction] = useState({
        atmTransactionID: '',
        atmID: '',
        customerID: '',
        transactionDate: '',
        amount: '',
        transactionTypeID: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction({ ...transaction, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(transaction);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">ATM Transaction</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="atmTransactionID" className="block text-sm font-medium">ATM Transaction ID</label>
                    <input type="number"
                           name="atmTransactionID" 
                           placeholder="ATM Transaction ID" 
                           value={transaction.atmTransactionID} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="atmID" className="block text-sm font-medium">ATM ID</label>
                    <input type="number"
                           name="atmID" 
                           placeholder="ATM ID" 
                           value={transaction.atmID} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="customerID" className="block text-sm font-medium">customer ID</label>
                    <input type="number"
                           name="customerID" 
                           placeholder="Customer ID" 
                           value={transaction.customerID} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="transactionDate" className="block text-sm font-medium">Transaction Date</label>
                    <input type="date"
                           name="transactionDate" 
                           placeholder="transaction Date" 
                           value={transaction.transactionDate} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium">Amount</label>
                    <input type="number"
                           name="amount" 
                           placeholder="amount" 
                           value={transaction.amount} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="transactionTypeID" className="block text-sm font-medium">Transaction Type ID</label>
                    <input type="number"
                           name="transactionTypeID" 
                           placeholder="transaction Type ID" 
                           value={transaction.transactionTypeID} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="Status" className="block text-sm font-medium">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={transaction.status}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Transaction Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Successful">Successful</option>
                        <option value="UnSuccessful">UnSuccessful</option>
                    </select>
                </div>
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Submit ATM Transaction
                    </button>
                </div>
                   
           </form>
        </div>
    );
};

export default ATMTransaction;
