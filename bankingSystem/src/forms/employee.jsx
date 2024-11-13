// src/components/EmployeeForm.js
import React, { useState } from 'react';

const Employee = () => {
    const [employee, setEmployee] = useState({
        employeeID: '',
        name: '',
        position: '',
        branchID: '',
        hireDate: '',
        salary: '',
        status: 'Active',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!employee.name) newErrors.name = 'Name is required';
        if (!employee.salary || employee.salary <= 0) newErrors.salary = 'Salary must be greater than 0';
        if (!employee.hireDate) newErrors.hireDate = 'Hire Date is required';
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
        const existingEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        existingEmployees.push(employee);
        localStorage.setItem('employees', JSON.stringify(existingEmployees));

        // Reset form
        setEmployee({
            employeeID: '',
            name: '',
            position: '',
            branchID: '',
            hireDate: '',
            salary: '',
            status: 'Active',
        });
        setErrors({});
        alert('Employee created successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Employee Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">Employee Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Employee Name"
                        value={employee.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>

                {/* position */}
                <div>
                    <label htmlFor="position" className="block text-sm font-medium">Employee Position</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        placeholder="Enter Employee Position"
                        value={employee.position}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.position && <p className="text-red-500 text-sm mt-2">{errors.position}</p>}
                </div>

                {/* branch ID */}
                <div>
                    <label htmlFor="branchId" className="block text-sm font-medium">Branch ID</label>
                    <input
                        type="text"
                        id="branchId"
                        name="branchId"
                        placeholder="Branch ID"
                        value={employee.branchID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.branchID && <p className="text-red-500 text-sm mt-2">{errors.branchID}</p>}
                </div>


                {/* Salary */}
                <div>
                    <label htmlFor="salary" className="block text-sm font-medium">Salary</label>
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        placeholder="Enter Salary"
                        value={employee.salary}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.salary && <p className="text-red-500 text-sm mt-2">{errors.salary}</p>}
                </div>

                {/* Hire Date */}
                <div>
                    <label htmlFor="hireDate" className="block text-sm font-medium">Hire Date</label>
                    <input
                        type="date"
                        id="hireDate"
                        name="hireDate"
                        value={employee.hireDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.hireDate && <p className="text-red-500 text-sm mt-2">{errors.hireDate}</p>}
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Create Employee
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Employee;
