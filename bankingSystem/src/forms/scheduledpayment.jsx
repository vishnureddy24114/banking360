// src/components/ScheduledPaymentForm.js
import React, { useState } from 'react';

const ScheduledPaymentForm = () => {
    const [payment, setPayment] = useState({
        accountId: '',
        amount: '',
        paymentDate: '',
        description: '',
        status: 'Pending',
    });

    const [errors, setErrors] = useState({});

    // Handle changes in form input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayment({ ...payment, [name]: value });
    };

    // Form validation
    const validate = () => {
        const newErrors = {};

        if (!payment.accountId) newErrors.accountId = 'Account ID is required';
        if (!payment.amount || payment.amount <= 0) newErrors.amount = 'Amount must be a positive number';
        if (!payment.paymentDate) newErrors.paymentDate = 'Payment Date is required';

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

        // Save payment to local storage
        const existingPayments = JSON.parse(localStorage.getItem('scheduledPayments')) || [];
        existingPayments.push(payment);
        localStorage.setItem('scheduledPayments', JSON.stringify(existingPayments));

        // Reset the form after successful submission
        setPayment({
            accountId: '',
            amount: '',
            paymentDate: '',
            description: '',
            status: 'Pending',
        });
        setErrors({});
        alert('Scheduled payment created successfully!');
    };

    // Reset the form to its initial state
    const handleReset = () => {
        setPayment({
            accountId: '',
            amount: '',
            paymentDate: '',
            description: '',
            status: 'Pending',
        });
        setErrors({});
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Schedule Payment</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Account ID */}
                <div className="space-y-2">
                    <label htmlFor="accountId" className="block text-sm font-medium text-gray-700">Account ID</label>
                    <input
                        type="text"
                        id="accountId"
                        name="accountId"
                        placeholder="Account ID"
                        value={payment.accountId}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.accountId && <p className="text-red-500 text-sm">{errors.accountId}</p>}
                </div>

                {/* Amount */}
                <div className="space-y-2">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="Amount"
                        value={payment.amount}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
                </div>

                {/* Payment Date */}
                <div className="space-y-2">
                    <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-700">Payment Date</label>
                    <input
                        type="date"
                        id="paymentDate"
                        name="paymentDate"
                        value={payment.paymentDate}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.paymentDate && <p className="text-red-500 text-sm">{errors.paymentDate}</p>}
                </div>

                {/* Description (Optional) */}
                <div className="space-y-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description (Optional)</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={payment.description}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    ></textarea>
                </div>

                {/* Status Dropdown */}
                <div className="space-y-2">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={payment.status}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Failed">Failed</option>
                    </select>
                </div>

                {/* Submit and Reset Buttons */}
                <div className="mt-6 flex justify-between">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 transition duration-200 ease-in-out"
                    >
                        Schedule Payment
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

export default ScheduledPaymentForm;
