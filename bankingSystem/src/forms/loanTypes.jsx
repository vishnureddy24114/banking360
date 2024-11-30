// src/components/LoanTypesForm.js
import React, { useState } from 'react';

const LoanTypes = () => {
    const [loanType, setLoanType] = useState({
        loanTypeID: '',
        typeName: '',
        description: '',
        maximumAmount: '',
        minimumAmount: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoanType({ ...loanType, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loanType); // Replace with API call to save data to the database
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Loan Type</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="loanTypeID" className="block text-sm font-medium">Loan Type ID</label>
                    <input type="text" name="loanTypeID" 
                    placeholder="Enter Loan Type ID"
                    value={loanType.loanTypeID} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="typeName" className="block text-sm font-medium">Type Name</label>
                    <input type="text" name="typeName"
                    placeholder="Enter Type Name" 
                    value={loanType.typeName} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium">Description</label>
                    <textarea name="description" 
                    placeholder="Enter Description"
                    value={loanType.description} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="maximumAmount" className="block text-sm font-medium">Maximum Amount</label>
                    <input type="number" name="maximumAmount" 
                    placeholder="Enter Maximum Amount"
                    value={loanType.maximumAmount} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="minimumAmount" className="block text-sm font-medium">Minimum Amount</label>
                    <input type="number" name="minimumAmount"
                    placeholder="Enter Minimum Amount"
                    value={loanType.minimumAmount} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mt-6 text-center">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200">Submit Loan Type</button>
                </div>
            </form>
        </div>
    );
};

export default LoanTypes;
