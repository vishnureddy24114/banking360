// src/components/LoanForm.js
import React, { useState } from 'react';

const Loan = () => {
    const [loan, setLoan] = useState({
        loanID: '',
        customerID: '',
        loanTypeID: '',
        amount: '',
        interestRate: '',
        startDate: '',
        endDate: '',
        status: 'Active',
        collateral: '',
        repaymentTerm: '',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoan({ ...loan, [name]: value });
    };

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!loan.amount || loan.amount <= 0) newErrors.amount = 'Amount must be a positive number';
        if (!loan.startDate) newErrors.startDate = 'Start Date is required';
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
        const existingLoans = JSON.parse(localStorage.getItem('loans')) || [];
        existingLoans.push(loan);
        localStorage.setItem('loans', JSON.stringify(existingLoans));

        // Reset form
        setLoan({
            loanID: '',
            customerID: '',
            loanTypeID: '',
            amount: '',
            interestRate: '',
            startDate: '',
            endDate: '',
            status: 'Active',
            collateral: '',
            repaymentTerm: '',
        });
        setErrors({});
        alert('Loan created successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Create Loan</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Loan ID */}
                <div>
                    <label htmlFor="loanID" className="block text-sm font-medium">Loan ID</label>
                    <input
                        type="text"
                        id="loanID"
                        name="loanID"
                        placeholder="Enter Loan ID"
                        value={loan.loanID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Amount */}
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium">Loan Amount</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="Enter Loan Amount"
                        value={loan.amount}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.amount && <p className="text-red-500 text-sm mt-2">{errors.amount}</p>}
                </div>

                {/* Start Date */}
                <div>
                    <label htmlFor="startDate" className="block text-sm font-medium">Start Date</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={loan.startDate}
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
                        Create Loan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Loan;
