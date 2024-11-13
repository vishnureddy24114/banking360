// src/components/OverdraftForm.js
import React, { useState } from 'react';

const Overdraft = () => {
    const [overdraft, setOverdraft] = useState({
        overdraftID: '',
        accountID: '',
        limit: '',
        startDate: '',
        endDate: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOverdraft({ ...overdraft, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(overdraft);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"><h2 className="text-3xl font-bold mb-6 text-center">OverDraft</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="overDraftID" className="block text-sm font-medium">OverDraft ID</label>
                    <input type="number"
                           name="overDraftID" 
                           placeholder="OverDraft ID" 
                           value={overdraft.overdraftID} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="accountID" className="block text-sm font-medium">Account ID</label>
                    <input type="number"
                           name="accountID" 
                           placeholder="Account ID" 
                           value={overdraft.accountID} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="limit" className="block text-sm font-medium">Limit</label>
                    <input type="number"
                           name="limit" 
                           placeholder="limit" 
                           value={overdraft.limit} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="startDate" className="block text-sm font-medium">Starting date</label>
                    <input type="date"
                           name="startDate" 
                           placeholder="Starting Date" 
                           value={overdraft.startDate} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="endDate" className="block text-sm font-medium">Ending date</label>
                    <input type="date"
                           name="endDate" 
                           placeholder="Ending Date" 
                           value={overdraft.endDate} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="Status" className="block text-sm font-medium">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={overdraft.status}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value=""> Status</option>
                        <option value="Pending">Active</option>
                        <option value="Successful">closed</option>
                    </select>
                </div>
                
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Submit OverDraft
                    </button>
                </div>
            </form>
        </div>
        
    );
};

export default Overdraft;
