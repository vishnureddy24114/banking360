// src/components/AccountHolderForm.js
import React, { useState } from 'react';

const AccountHolder = () => {
    const [accountHolder, setAccountHolder] = useState({
        accountHolderID: '',
        accountID: '',
        customerID: '',
        relationshipType: 'Primary',
        startDate: '',
        endDate: '',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountHolder({ ...accountHolder, [name]: value });
    };

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!accountHolder.startDate) newErrors.startDate = 'Start Date is required';
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
        const existingAccountHolders = JSON.parse(localStorage.getItem('accountHolders')) || [];
        existingAccountHolders.push(accountHolder);
        localStorage.setItem('accountHolders', JSON.stringify(existingAccountHolders));

        // Reset form
        setAccountHolder({
            accountHolderID: '',
            accountID: '',
            customerID: '',
            relationshipType: 'Primary',
            startDate: '',
            endDate: '',
        });
        setErrors({});
        alert('Account Holder created successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Account Holder Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Account Holder ID */}
                <div>
                    <label htmlFor="accountHolderID" className="block text-sm font-medium">Account Holder ID</label>
                    <input
                        type="text"
                        id="accountHolderID"
                        name="accountHolderID"
                        placeholder="Enter Account Holder ID"
                        value={accountHolder.accountHolderID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Account ID */}
                <div>
                    <label htmlFor="accountHolderID" className="block text-sm font-medium">Account ID</label>
                    <input
                        type="text"
                        id="accountID"
                        name="accountID"
                        placeholder="Enter Account ID"
                        value={accountHolder.accountID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* customer ID */}
                <div>
                    <label htmlFor="customerID" className="block text-sm font-medium">Customer ID</label>
                    <input
                        type="text"
                        id="customerID"
                        name="customerID"
                        placeholder="Enter Customer ID"
                        value={accountHolder.customerID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Relationship Type */}
                <div>
                    <label htmlFor="relationshipType" className="block text-sm font-medium">Relationship Type</label>
                    <select
                        id="relationshipType"
                        name="relationshipType"
                        value={accountHolder.relationshipType}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="Primary">Primary</option>
                        <option value="Joint">Joint</option>
                    </select>
                </div>

                {/* Start Date */}
                <div>
                    <label htmlFor="startDate" className="block text-sm font-medium">Start Date</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={accountHolder.startDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.startDate && <p className="text-red-500 text-sm mt-2">{errors.startDate}</p>}
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Create Account Holder
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AccountHolder;
