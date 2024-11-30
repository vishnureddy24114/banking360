// src/components/BranchForm.js
import React, { useState } from 'react';

const Branch = () => {
    const [branch, setBranch] = useState({
        branchID: '',
        branchName: '',
        address: '',
        phone: '',
        managerID: '',
        openingDate: '',
        status: 'Active',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBranch({ ...branch, [name]: value });
    };

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!branch.branchName) newErrors.branchName = 'Branch Name is required';
        if (!branch.address) newErrors.address = 'Address is required';
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
        const existingBranches = JSON.parse(localStorage.getItem('branches')) || [];
        existingBranches.push(branch);
        localStorage.setItem('branches', JSON.stringify(existingBranches));

        // Reset form
        setBranch({
            branchID: '',
            branchName: '',
            address: '',
            phone: '',
            managerID: '',
            openingDate: '',
            status: '',
        });
        setErrors({});
        alert('Branch created successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Branch Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Branch Name */}
                <div>
                    <label htmlFor="branchID" className="block text-sm font-medium">Branch ID</label>
                    <input
                        type="number"
                        id="branchID"
                        name="branchID"
                        placeholder="Enter Branch ID"
                        value={branch.branchID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.branchID && <p className="text-red-500 text-sm mt-2">{errors.branchID}</p>}
                </div>

                {/* Branch Name */}
                <div>
                    <label htmlFor="branchName" className="block text-sm font-medium">Branch Name</label>
                    <input
                        type="text"
                        id="branchName"
                        name="branchName"
                        placeholder="Enter Branch Name"
                        value={branch.branchName}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.branchName && <p className="text-red-500 text-sm mt-2">{errors.branchName}</p>}
                </div>

                {/* Address */}
                <div>
                    <label htmlFor="address" className="block text-sm font-medium">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Enter Address"
                        value={branch.address}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-2">{errors.address}</p>}
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Enter Phone"
                        value={branch.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                </div>

                {/* manager ID */}
                <div>
                    <label htmlFor="Manager ID" className="block text-sm font-medium">Manager ID</label>
                    <input
                        type="text"
                        id="managerId"
                        name="managerId"
                        placeholder="Enter managerId"
                        value={branch.managerID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.managerID && <p className="text-red-500 text-sm mt-2">{errors.managerID}</p>}
                </div>

                {/* opening data */}
                <div>
                    <label htmlFor="Opening Date" className="block text-sm font-medium">Opening Date</label>
                    <input
                        type="text"
                        id="openingdate"
                        name="openingdate"
                        placeholder="Enter opening date"
                        value={branch.openingDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.openingDate && <p className="text-red-500 text-sm mt-2">{errors.openingDate}</p>}
                </div>

                {/* Status */}
                <div>
                    <label htmlFor="status" className="block text-sm font-medium">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={branch.status}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>


                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Create Branch
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Branch;
