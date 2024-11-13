// src/components/CardForm.js
import React, { useState } from 'react';

const CardForm = () => {
    const [card, setCard] = useState({
        cardID: '',
        customerID: '',
        cardType: 'Debit',
        expiryDate: '',
        cardNumber: '',
        cvv: '',
        issueDate: '',
        status: 'Active',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCard({ ...card, [name]: value });
    };

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!card.cardNumber || card.cardNumber.length !== 16) newErrors.cardNumber = 'Card Number must be 16 digits';
        if (!card.cvv || card.cvv.length !== 3) newErrors.cvv = 'CVV must be 3 digits';
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
        const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
        existingCards.push(card);
        localStorage.setItem('cards', JSON.stringify(existingCards));

        // Reset form
        setCard({
            cardID: '',
            customerID: '',
            cardType: 'Debit',
            expiryDate: '',
            cardNumber: '',
            cvv: '',
            issueDate: '',
            status: 'Active',
        });
        setErrors({});
        alert('Card created successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Create Card</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Card Type */}
                <div>
                    <label htmlFor="cardType" className="block text-sm font-medium">Card Type</label>
                    <select
                        id="cardType"
                        name="cardType"
                        value={card.cardType}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="Debit">Debit</option>
                        <option value="Credit">Credit</option>
                    </select>
                </div>

                {/* Card Number */}
                <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="Enter 16-digit card number"
                        value={card.cardNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm mt-2">{errors.cardNumber}</p>}
                </div>

                {/* CVV */}
                <div>
                    <label htmlFor="cvv" className="block text-sm font-medium">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="Enter 3-digit CVV"
                        value={card.cvv}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.cvv && <p className="text-red-500 text-sm mt-2">{errors.cvv}</p>}
                </div>

                {/* Expiry Date */}
                <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium">Expiry Date</label>
                    <input
                        type="month"
                        id="expiryDate"
                        name="expiryDate"
                        value={card.expiryDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Issue Date */}
                <div>
                    <label htmlFor="issueDate" className="block text-sm font-medium">Issue Date</label>
                    <input
                        type="date"
                        id="issueDate"
                        name="issueDate"
                        value={card.issueDate}
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
                        Create Card
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CardForm;
