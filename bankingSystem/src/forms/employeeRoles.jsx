// src/components/EmployeeRolesForm.js
import React, { useState } from 'react';

const EmployeeRoles = () => {
    const [role, setRole] = useState({
        roleID: '',
        roleName: '',
        description: '',
        department: '',
        level: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRole({ ...role, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(role); // Replace with API call to save data to the database
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Employee Role</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="roleID" className="block text-sm font-medium">Role ID</label>
                    <input type="text" name="roleID" value={role.roleID} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="roleName" className="block text-sm font-medium">Role Name</label>
                    <input type="text" name="roleName" value={role.roleName} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium">Description</label>
                    <textarea name="description" value={role.description} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="department" className="block text-sm font-medium">Department</label>
                    <input type="text" name="department" value={role.department} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="level" className="block text-sm font-medium">Level</label>
                    <input type="text" name="level" value={role.level} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mt-6 text-center">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200">Submit Role</button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeRoles;
