// src/components/TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = () => {
    const [transaction, setTransaction] = useState({
        accountId: '',
        transactionDate: '',
        amount: '',
        transactionType: '',
        description: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction({ ...transaction, [name]: value });
    };

    const validate = () => {
        const newErrors = {};

        if (!transaction.accountId) newErrors.accountId = 'Account ID is required';
        if (!transaction.transactionDate) newErrors.transactionDate = 'Transaction Date is required';
        if (!transaction.amount || transaction.amount <= 0) newErrors.amount = 'Amount must be a positive number';
        if (!transaction.transactionType) newErrors.transactionType = 'Transaction Type is required';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Save to local storage
        const existingTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
        existingTransactions.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(existingTransactions));

        // Reset form
        setTransaction({
            accountId: '',
            transactionDate: '',
            amount: '',
            transactionType: '',
            description: '',
        });
        setErrors({});
        alert('Transaction recorded successfully!');
    };

    const handleReset = () => {
        setTransaction({
            accountId: '',
            transactionDate: '',
            amount: '',
            transactionType: '',
            description: '',
        });
        setErrors({});
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Add Transaction</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Account ID */}
                <div className="space-y-2">
                    <label htmlFor="accountId" className="block text-sm font-medium text-gray-700">Account ID</label>
                    <input
                        type="text"
                        id="accountId"
                        name="accountId"
                        placeholder="Account ID"
                        value={transaction.accountId}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.accountId && <p className="text-red-500 text-sm">{errors.accountId}</p>}
                </div>

                {/* Transaction Date */}
                <div className="space-y-2">
                    <label htmlFor="transactionDate" className="block text-sm font-medium text-gray-700">Transaction Date</label>
                    <input
                        type="date"
                        id="transactionDate"
                        name="transactionDate"
                        value={transaction.transactionDate}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.transactionDate && <p className="text-red-500 text-sm">{errors.transactionDate}</p>}
                </div>

                {/* Amount */}
                <div className="space-y-2">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="Amount"
                        value={transaction.amount}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
                </div>

                {/* Transaction Type */}
                <div className="space-y-2">
                    <label htmlFor="transactionType" className="block text-sm font-medium text-gray-700">Transaction Type</label>
                    <select
                        id="transactionType"
                        name="transactionType"
                        value={transaction.transactionType}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    >
                        <option value="">Select Transaction Type</option>
                        <option value="Deposit">Deposit</option>
                        <option value="Withdrawal">Withdrawal</option>
                        <option value="Transfer">Transfer</option>
                    </select>
                    {errors.transactionType && <p className="text-red-500 text-sm">{errors.transactionType}</p>}
                </div>

                {/* Description (Optional) */}
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

                {/* Submit and Reset Buttons */}
                <div className="mt-6 flex justify-between">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 transition duration-200 ease-in-out"
                    >
                        Record Transaction
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 focus:ring-4 focus:ring-gray-200 transition duration-200 ease-in-out"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TransactionForm;
