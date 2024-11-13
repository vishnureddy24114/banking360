// src/components/CustomerForm.jsx
import React, { useState } from 'react';

const Customer = () => {
    const [customer, setCustomer] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        dob: '',
        gender: '',
        nationality: '',
        occupation: '',
        maritalStatus: '',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    // Validate the form
    const validate = () => {
        const newErrors = {};
        if (!customer.name) newErrors.name = 'Name is required';
        if (!customer.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(customer.email)) newErrors.email = 'Email is invalid';
        if (!customer.phone) newErrors.phone = 'Phone is required';
        if (!customer.dob) newErrors.dob = 'Date of Birth is required';
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

        // Save customer data to local storage
        const existingCustomers = JSON.parse(localStorage.getItem('customers')) || [];
        existingCustomers.push(customer);
        localStorage.setItem('customers', JSON.stringify(existingCustomers));

        // Reset form and errors
        setCustomer({
            name: '',
            address: '',
            phone: '',
            email: '',
            dob: '',
            gender: '',
            nationality: '',
            occupation: '',
            maritalStatus: '',
        });
        setErrors({});
        alert('Customer added successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Customer Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={customer.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>

                {/* Address */}
                <div>
                    <label htmlFor="address" className="block text-sm font-medium">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Enter your address"
                        value={customer.address}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={customer.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={customer.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>

                {/* Date of Birth */}
                <div>
                    <label htmlFor="dob" className="block text-sm font-medium">Date of Birth</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={customer.dob}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.dob && <p className="text-red-500 text-sm mt-2">{errors.dob}</p>}
                </div>

                {/* Gender */}
                <div>
                    <label htmlFor="gender" className="block text-sm font-medium">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        value={customer.gender}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Nationality */}
                <div>
                    <label htmlFor="nationality" className="block text-sm font-medium">Nationality</label>
                    <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        placeholder="Enter your nationality"
                        value={customer.nationality}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Occupation */}
                <div>
                    <label htmlFor="occupation" className="block text-sm font-medium">Occupation</label>
                    <input
                        type="text"
                        id="occupation"
                        name="occupation"
                        placeholder="Enter your occupation"
                        value={customer.occupation}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Marital Status */}
                <div>
                    <label htmlFor="maritalStatus" className="block text-sm font-medium">Marital Status</label>
                    <select
                        id="maritalStatus"
                        name="maritalStatus"
                        value={customer.maritalStatus}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select Marital Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Add Customer
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Customer;
