// src/components/AccountForm.js
import React, { useState } from 'react';

const Account = () => {
    const [account, setAccount] = useState({
        accountID: '',
        customerID: '',
        accountType: 'Savings',
        balance: '',
        openDate: '',
        status: 'Active',
        interestRate: '',
        branchID: '',
        currency: 'USD',
        overdraftLimit: '',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount({ ...account, [name]: value });
    };

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!account.balance || account.balance <= 0) newErrors.balance = 'Balance must be a positive number';
        if (!account.openDate) newErrors.openDate = 'Open Date is required';
        if (!account.interestRate || account.interestRate <= 0) newErrors.interestRate = 'Interest Rate must be a positive number';
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Save to local storage or API
        const existingAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
        existingAccounts.push(account);
        localStorage.setItem('accounts', JSON.stringify(existingAccounts));

        // Reset form
        setAccount({
            accountID: '',
            customerID: '',
            accountType: 'Savings',
            balance: '',
            openDate: '',
            status: 'Active',
            interestRate: '',
            branchID: '',
            currency: 'USD',
            overdraftLimit: '',
        });
        setErrors({});
        alert('Account created successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Account ID */}
                <div>
                    <label htmlFor="accountID" className="block text-sm font-medium">Account ID</label>
                    <input
                        type="text"
                        id="accountID"
                        name="accountID"
                        placeholder="Enter Account ID"
                        value={account.accountID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Customer ID */}
                <div>
                    <label htmlFor="customerID" className="block text-sm font-medium">Customer ID</label>
                    <input
                        type="text"
                        id="customerID"
                        name="customerID"
                        placeholder="Enter Customer ID"
                        value={account.customerID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Account Type */}
                <div>
                    <label htmlFor="accountType" className="block text-sm font-medium">Account Type</label>
                    <select
                        id="accountType"
                        name="accountType"
                        value={account.accountType}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="Savings">Savings</option>
                        <option value="Current">Current</option>
                        <option value="Fixed Deposit">Fixed Deposit</option>
                    </select>
                </div>

                {/* Balance */}
                <div>
                    <label htmlFor="balance" className="block text-sm font-medium">Initial Balance</label>
                    <input
                        type="number"
                        id="balance"
                        name="balance"
                        placeholder="Enter balance"
                        value={account.balance}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.balance && <p className="text-red-500 text-sm mt-2">{errors.balance}</p>}
                </div>

                {/* Open Date */}
                <div>
                    <label htmlFor="openDate" className="block text-sm font-medium">Open Date</label>
                    <input
                        type="date"
                        id="openDate"
                        name="openDate"
                        value={account.openDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.openDate && <p className="text-red-500 text-sm mt-2">{errors.openDate}</p>}
                </div>

                {/* Status */}
                <div>
                    <label htmlFor="status" className="block text-sm font-medium">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={account.status}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>

                {/* Interest Rate */}
                <div>
                    <label htmlFor="interestRate" className="block text-sm font-medium">Interest Rate</label>
                    <input
                        type="number"
                        id="interestRate"
                        name="interestRate"
                        placeholder="Enter interest rate"
                        value={account.interestRate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.interestRate && <p className="text-red-500 text-sm mt-2">{errors.interestRate}</p>}
                </div>

                {/* Branch ID */}
                <div>
                    <label htmlFor="branchID" className="block text-sm font-medium">Branch ID</label>
                    <input
                        type="text"
                        id="branchID"
                        name="branchID"
                        placeholder="Enter Branch ID"
                        value={account.branchID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Currency */}
                <div>
                    <label htmlFor="currency" className="block text-sm font-medium">Currency</label>
                    <select
                        id="currency"
                        name="currency"
                        value={account.currency}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>

                {/* Overdraft Limit */}
                <div>
                    <label htmlFor="overdraftLimit" className="block text-sm font-medium">Overdraft Limit</label>
                    <input
                        type="number"
                        id="overdraftLimit"
                        name="overdraftLimit"
                        placeholder="Enter overdraft limit"
                        value={account.overdraftLimit}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Account;
