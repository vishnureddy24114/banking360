// src/components/TransactionTypesForm.js
import React, { useState } from 'react';

const TransactionTypes = () => {
    const [transactionType, setTransactionType] = useState({
        transactionTypeID: '',
        typeName: '',
        description: '',
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransactionType({ ...transactionType, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(transactionType); // Replace with API call to save data to the database
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Transaction Type</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="transactionTypeID" className="block text-sm font-medium">Transaction Type ID</label>
                    <input type="text" name="transactionTypeID" value={transactionType.transactionTypeID} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="typeName" className="block text-sm font-medium">Type Name</label>
                    <input type="text" name="typeName" value={transactionType.typeName} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium">Description</label>
                    <textarea name="description" value={transactionType.description} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium">Category</label>
                    <input type="text" name="category" value={transactionType.category} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mt-6 text-center">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200">Submit Transaction Type</button>
                </div>
            </form>
        </div>
    );
};

export default TransactionTypes;
