// src/components/LoanRepaymentForm.js
import React, { useState } from 'react';

const LoanRepayment = () => {
    const [loanRepayment, setLoanRepayment] = useState({
        repaymentID: '',
        loanID: '',
        repaymentAmount: '',
        repaymentDate: '',
        paymentMethod: 'Bank Transfer',
        status: 'Completed',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoanRepayment({ ...loanRepayment, [name]: value });
    };

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!loanRepayment.repaymentAmount || loanRepayment.repaymentAmount <= 0) newErrors.repaymentAmount = 'Repayment Amount must be a positive number';
        if (!loanRepayment.repaymentDate) newErrors.repaymentDate = 'Repayment Date is required';
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
        const existingLoanRepayments = JSON.parse(localStorage.getItem('loanRepayments')) || [];
        existingLoanRepayments.push(loanRepayment);
        localStorage.setItem('loanRepayments', JSON.stringify(existingLoanRepayments));

        // Reset form
        setLoanRepayment({
            repaymentID: '',
            loanID: '',
            repaymentAmount: '',
            repaymentDate: '',
            paymentMethod: 'Bank Transfer',
            status: '',
        });
        setErrors({});
        alert('Loan Repayment created successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Loan Repayment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                 {/* Repayment ID */}
                 <div>
                    <label htmlFor="repaymentID" className="block text-sm font-medium">Repayment ID</label>
                    <input
                        type="text"
                        id="repaymentID"
                        name="repaymentID"
                        placeholder="Enter repaymentID"
                        value={loanRepayment.repaymentID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.repaymentID && <p className="text-red-500 text-sm mt-2">{errors.repaymentID}</p>}
                </div>

                {/* Loan ID */}
                <div>
                    <label htmlFor="loanID" className="block text-sm font-medium">Loan ID</label>
                    <input
                        type="text"
                        id="loanID"
                        name="loanID"
                        placeholder="Enter Loan ID"
                        value={loanRepayment.loanID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.loanID && <p className="text-red-500 text-sm mt-2">{errors.loanID}</p>}
                </div>
               
                {/* Repayment Amount */}
                <div>
                    <label htmlFor="repaymentAmount" className="block text-sm font-medium">Repayment Amount</label>
                    <input
                        type="number"
                        id="repaymentAmount"
                        name="repaymentAmount"
                        placeholder="Enter Repayment Amount"
                        value={loanRepayment.repaymentAmount}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.repaymentAmount && <p className="text-red-500 text-sm mt-2">{errors.repaymentAmount}</p>}
                </div>

                {/* Repayment Date */}
                <div>
                    <label htmlFor="repaymentDate" className="block text-sm font-medium">Repayment Date</label>
                    <input
                        type="date"
                        id="repaymentDate"
                        name="repaymentDate"
                        value={loanRepayment.repaymentDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.repaymentDate && <p className="text-red-500 text-sm mt-2">{errors.repaymentDate}</p>}
                </div>

                {/* Payment Method */}
                <div>
                    <label htmlFor="paymentMethod" className="block text-sm font-medium">Payment Method</label>
                    <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={loanRepayment.paymentMethod}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Cash">Cash</option>
                        <option value="Cheque">Cheque</option>
                    </select>
                </div>

                {/* Status */}
                <div>
                    <label htmlFor="status" className="block text-sm font-medium">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={loanRepayment.status}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select Status</option>
                        <option value="Active">Completed</option>
                        <option value="Inactive">InCompleted</option>
                    </select>
                </div>


                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Create Loan Repayment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoanRepayment;
