// src/components/AccountTransactionForm.js
import React, { useState } from 'react';

const AccountTransaction = () => {
    const [transaction, setTransaction] = useState({
        transactionID: '',
        accountID: '',
        transactionDate: '',
        amount: '',
        transactionTypeID: '',
        description: '',
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
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"><h2 className="text-3xl font-bold mb-6 text-center">Account Transactions</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="TransactionID" className="block text-sm font-medium">Transaction ID</label>
                    <input type="number"
                           name="TransactionID" 
                           placeholder="Transaction ID" 
                           value={transaction.transactionID} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="AccountID" className="block text-sm font-medium">Account ID</label>
                    <input type="number"
                           name="AccountID" 
                           placeholder="Account ID" 
                           value={transaction.accountID} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="TransactionDate" className="block text-sm font-medium">Transaction Date</label>
                    <input type="date"
                           name="TransactionDate" 
                           placeholder="Transaction Date" 
                           value={transaction.transactionDate} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium">Amount</label>
                    <input type="number"
                           name="amount" 
                           placeholder="Amount" 
                           value={transaction.amount} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="TransactionTypeID" className="block text-sm font-medium">Transaction Type ID</label>
                    <input type="number"
                           name="TransactionTypeID" 
                           placeholder="Transaction Type ID" 
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
                <div className="space-y-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description (Optional)</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={transaction.description}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    ></textarea>
                </div>
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Submit Account Transaction
                    </button>
                </div>
            </form>
        </div>
        
    );
};

export default AccountTransaction;
