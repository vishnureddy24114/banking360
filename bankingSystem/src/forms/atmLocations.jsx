// src/components/ATMForm.js
import React, { useState } from 'react';

const ATMLocations = () => {
    const [atm, setAtm] = useState({
        atmID: '',
        location: '',
        branchID: '',
        installationDate: '',
        status: 'Active',
        maintenanceSchedule: '',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAtm({ ...atm, [name]: value });
    };

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!atm.location) newErrors.location = 'Location is required';
        if (!atm.installationDate) newErrors.installationDate = 'Installation Date is required';
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
        const existingATMs = JSON.parse(localStorage.getItem('atms')) || [];
        existingATMs.push(atm);
        localStorage.setItem('atms', JSON.stringify(existingATMs));

        // Reset form
        setAtm({
            atmID: '',
            location: '',
            branchID: '',
            installationDate: '',
            status: 'Active',
            maintenanceSchedule: '',
        });
        setErrors({});
        alert('ATM created successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">ATM Locations</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Location */}
                <div>
                    <label htmlFor="location" className="block text-sm font-medium">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Enter ATM Location"
                        value={atm.location}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.location && <p className="text-red-500 text-sm mt-2">{errors.location}</p>}
                </div>

                 {/* branch Id */}
                 <div>
                    <label htmlFor="Branch ID" className="block text-sm font-medium">Branch ID</label>
                    <input
                        type="text"
                        id="branch ID"
                        name="branch ID"
                        placeholder="Enter Branch ID"
                        value={atm.branchID}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.branchID && <p className="text-red-500 text-sm mt-2">{errors.branchID}</p>}
                </div>

                {/* Installation Date */}
                <div>
                    <label htmlFor="installationDate" className="block text-sm font-medium">Installation Date</label>
                    <input
                        type="date"
                        id="installationDate"
                        name="installationDate"
                        value={atm.installationDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.installationDate && <p className="text-red-500 text-sm mt-2">{errors.installationDate}</p>}
                </div>

                {/* Maintenance Schedule */}
                <div>
                    <label htmlFor="maintenanceSchedule" className="block text-sm font-medium">Maintenance Schedule</label>
                    <input
                        type="text"
                        id="maintenanceSchedule"
                        name="maintenanceSchedule"
                        placeholder="Enter Maintenance Schedule"
                        value={atm.maintenanceSchedule}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Create ATM
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ATMLocations;
