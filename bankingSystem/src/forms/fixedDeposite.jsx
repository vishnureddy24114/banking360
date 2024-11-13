// src/components/FixedDepositForm.js
import React, { useState } from 'react';

const FixedDeposit = () => {
    const [deposit, setDeposit] = useState({
        depositeID: '',
        customerID: '',
        amount: '',
        interestRate: '',
        startDate: '',
        endDate: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeposit({ ...deposit, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(deposit);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"><h2 className="text-3xl font-bold mb-6 text-center">Fixed Deposites</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="depositID" className="block text-sm font-medium">Deposite ID</label>
                    <input type="number"
                           name="depositeID" 
                           placeholder="Deposite ID" 
                           value={deposit.depositeID} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="customerID" className="block text-sm font-medium">Customer ID</label>
                    <input type="number"
                           name="customerID" 
                           placeholder="Customer ID" 
                           value={deposit.customerID} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium">Amount</label>
                    <input type="number"
                           name="amount" 
                           placeholder="Amount" 
                           value={deposit.amount} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="interestRate" className="block text-sm font-medium">Interest Rate</label>
                    <input type="number"
                           name="interestRate" 
                           placeholder="Interest Rate" 
                           value={deposit.interestRate} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="startDate" className="block text-sm font-medium">Starting date</label>
                    <input type="date"
                           name="startDate" 
                           placeholder="Starting Date" 
                           value={deposit.startDate} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="endDate" className="block text-sm font-medium">Ending date</label>
                    <input type="date"
                           name="endDate" 
                           placeholder="Ending Date" 
                           value={deposit.endDate} 
                           onChange={handleChange} 
                           className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="Status" className="block text-sm font-medium">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={deposit.status}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Deposite Status</option>
                        <option value="Pending">Active</option>
                        <option value="Successful">closed</option>
                    </select>
                </div>
                
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Submit Fixed Deposite
                    </button>
                </div>
            </form>
        </div>
        
    );
};

export default FixedDeposit;
