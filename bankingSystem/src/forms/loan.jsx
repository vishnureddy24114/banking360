// src/components/LoanForm.jsx
import React, { useState } from 'react';

const LoanForm = () => {
    const [loan, setLoan] = useState({
        loanType: '',
        amount: '',
        interestRate: '',
        startDate: '',
        endDate: '',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoan({ ...loan, [name]: value });
    };

    // Validate the form
    const validate = () => {
        const newErrors = {};
        if (!loan.loanType) newErrors.loanType = 'Loan Type is required';
        if (!loan.amount || loan.amount <= 0) newErrors.amount = 'Loan Amount is required';
        if (!loan.interestRate || loan.interestRate <= 0) newErrors.interestRate = 'Interest Rate is required';
        if (!loan.startDate) newErrors.startDate = 'Start Date is required';
        if (!loan.endDate) newErrors.endDate = 'End Date is required';
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

        // Save loan data to local storage
        const existingLoans = JSON.parse(localStorage.getItem('loans')) || [];
        existingLoans.push(loan);
        localStorage.setItem('loans', JSON.stringify(existingLoans));

        // Reset form and errors
        setLoan({
            loanType: '',
            amount: '',
            interestRate: '',
            startDate: '',
            endDate: '',
        });
        setErrors({});
        alert('Loan applied successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Apply for Loan</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Loan Type */}
                <div>
                    <label htmlFor="loanType" className="block text-sm font-medium">Loan Type</label>
                    <select
                        id="loanType"
                        name="loanType"
                        value={loan.loanType}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select Loan Type</option>
                        <option value="Personal">Personal Loan</option>
                        <option value="Home">Home Loan</option>
                        <option value="Car">Car Loan</option>
                    </select>
                    {errors.loanType && <p className="text-red-500 text-sm mt-2">{errors.loanType}</p>}
                </div>

                {/* Loan Amount */}
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium">Loan Amount</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={loan.amount}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.amount && <p className="text-red-500 text-sm mt-2">{errors.amount}</p>}
                </div>

                {/* Interest Rate */}
                <div>
                    <label htmlFor="interestRate" className="block text-sm font-medium">Interest Rate (%)</label>
                    <input
                        type="number"
                        id="interestRate"
                        name="interestRate"
                        value={loan.interestRate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.interestRate && <p className="text-red-500 text-sm mt-2">{errors.interestRate}</p>}
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
                        required
                    />
                    {errors.startDate && <p className="text-red-500 text-sm mt-2">{errors.startDate}</p>}
                </div>

                {/* End Date */}
                <div>
                    <label htmlFor="endDate" className="block text-sm font-medium">End Date</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={loan.endDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.endDate && <p className="text-red-500 text-sm mt-2">{errors.endDate}</p>}
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Apply for Loan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoanForm;
