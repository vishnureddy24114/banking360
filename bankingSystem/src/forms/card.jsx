// src/components/CardForm.jsx
import React, { useState } from 'react';

const CardForm = () => {
    const [card, setCard] = useState({
        cardType: '',
        cardNumber: '',
        expirationDate: '',
        cardHolderName: '',
        cvv: '',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCard({ ...card, [name]: value });
    };

    // Validate the form
    const validate = () => {
        const newErrors = {};
        if (!card.cardType) newErrors.cardType = 'Card Type is required';
        if (!card.cardNumber || card.cardNumber.length !== 16) newErrors.cardNumber = 'Card Number must be 16 digits';
        if (!card.expirationDate) newErrors.expirationDate = 'Expiration Date is required';
        if (!card.cardHolderName) newErrors.cardHolderName = 'Card Holder Name is required';
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

        // Save card data to local storage
        const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
        existingCards.push(card);
        localStorage.setItem('cards', JSON.stringify(existingCards));

        // Reset form and errors
        setCard({
            cardType: '',
            cardNumber: '',
            expirationDate: '',
            cardHolderName: '',
            cvv: '',
        });
        setErrors({});
        alert('Card information saved successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Add Card Information</h2>
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
                        required
                    >
                        <option value="">Select Card Type</option>
                        <option value="Visa">Visa</option>
                        <option value="MasterCard">MasterCard</option>
                        <option value="American Express">American Express</option>
                    </select>
                    {errors.cardType && <p className="text-red-500 text-sm mt-2">{errors.cardType}</p>}
                </div>

                {/* Card Number */}
                <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="Enter your card number"
                        value={card.cardNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm mt-2">{errors.cardNumber}</p>}
                </div>

                {/* Expiration Date */}
                <div>
                    <label htmlFor="expirationDate" className="block text-sm font-medium">Expiration Date</label>
                    <input
                        type="month"
                        id="expirationDate"
                        name="expirationDate"
                        value={card.expirationDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.expirationDate && <p className="text-red-500 text-sm mt-2">{errors.expirationDate}</p>}
                </div>

                {/* Card Holder Name */}
                <div>
                    <label htmlFor="cardHolderName" className="block text-sm font-medium">Card Holder Name</label>
                    <input
                        type="text"
                        id="cardHolderName"
                        name="cardHolderName"
                        placeholder="Enter the cardholder's name"
                        value={card.cardHolderName}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.cardHolderName && <p className="text-red-500 text-sm mt-2">{errors.cardHolderName}</p>}
                </div>

                {/* CVV */}
                <div>
                    <label htmlFor="cvv" className="block text-sm font-medium">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="Enter CVV"
                        value={card.cvv}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.cvv && <p className="text-red-500 text-sm mt-2">{errors.cvv}</p>}
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Save Card Information
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CardForm;
