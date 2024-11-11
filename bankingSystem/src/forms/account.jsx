// src/components/AccountForm.js
import React, { useState } from 'react';

const AccountForm = () => {
    const [account, setAccount] = useState({
        accountType: 'Savings',
        balance: '',
        openDate: '',
        currency: 'USD',
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

        // Save to local storage
        const existingAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
        existingAccounts.push(account);
        localStorage.setItem('accounts', JSON.stringify(existingAccounts));

        // Reset form
        setAccount({
            accountType: 'Savings',
            balance: '',
            openDate: '',
            currency: 'USD',
        });
        setErrors({});
        alert('Account created successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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

export default AccountForm;
