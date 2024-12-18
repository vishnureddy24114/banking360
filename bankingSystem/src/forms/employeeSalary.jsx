// src/components/EmployeeSalaryForm.js
import React, { useState } from 'react';

const EmployeeSalary = () => {
    const [salary, setSalary] = useState({
        salaryID: '',
        employeeID: '',
        salaryAmount: '',
        paymentDate: '',
        bonus: '',
        deductions: '',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSalary({ ...salary, [name]: value });
    };

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!salary.salaryAmount || salary.salaryAmount <= 0) newErrors.salaryAmount = 'Salary Amount must be greater than 0';
        if (!salary.paymentDate) newErrors.paymentDate = 'Payment Date is required';
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
        const existingSalaries = JSON.parse(localStorage.getItem('employeeSalaries')) || [];
        existingSalaries.push(salary);
        localStorage.setItem('employeeSalaries', JSON.stringify(existingSalaries));

        // Reset form
        setSalary({
            salaryID: '',
            employeeID: '',
            salaryAmount: '',
            paymentDate: '',
            bonus: '',
            deductions: '',
        });
        setErrors({});
        alert('Salary record created successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Create Employee Salary</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Salary ID */}
                <div>
                    <label htmlFor="salaryID" className="block text-sm font-medium">Salary ID</label>
                    <input
                        type="number"
                        id="salaryID"
                        name="salaryID"
                        placeholder="Enter Salary ID"
                        value={salary.salaryID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.salaryID && <p className="text-red-500 text-sm mt-2">{errors.salaryID}</p>}
                </div>

                {/* Employee ID */}
                <div>
                    <label htmlFor="employee ID" className="block text-sm font-medium">Employee ID</label>
                    <input
                        type="number"
                        id="employee ID"
                        name="employee ID"
                        placeholder="Enter Employee ID"
                        value={salary.employeeID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.employeeID && <p className="text-red-500 text-sm mt-2">{errors.employeeID}</p>}
                </div>

                {/* Salary Amount */}
                <div>
                    <label htmlFor="salaryAmount" className="block text-sm font-medium">Salary Amount</label>
                    <input
                        type="number"
                        id="salaryAmount"
                        name="salaryAmount"
                        placeholder="Enter Salary Amount"
                        value={salary.salaryAmount}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.salaryAmount && <p className="text-red-500 text-sm mt-2">{errors.salaryAmount}</p>}
                </div>

                {/* Payment Date */}
                <div>
                    <label htmlFor="paymentDate" className="block text-sm font-medium">Payment Date</label>
                    <input
                        type="date"
                        id="paymentDate"
                        name="paymentDate"
                        value={salary.paymentDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.paymentDate && <p className="text-red-500 text-sm mt-2">{errors.paymentDate}</p>}
                </div>

                {/* Bonus */}
                <div>
                    <label htmlFor="Bonus" className="block text-sm font-medium">Bonus</label>
                    <input
                        type="number"
                        id="bonus"
                        name="bonus"
                        placeholder='Enter Bonus'
                        value={salary.bonus}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.bonus && <p className="text-red-500 text-sm mt-2">{errors.bonus}</p>}
                </div>

                {/* Deductions */}
                <div>
                    <label htmlFor="Deductions" className="block text-sm font-medium">Deductions</label>
                    <input
                        type="number"
                        id="deductions"
                        name="deductions"
                        placeholder='Enter Deductions'
                        value={salary.deductions}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.deductions && <p className="text-red-500 text-sm mt-2">{errors.deductions}</p>}
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Create Salary Record
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeSalary;
