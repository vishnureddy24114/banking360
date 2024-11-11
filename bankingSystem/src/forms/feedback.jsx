// src/components/FeedbackForm.jsx
import React, { useState } from 'react';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback({ ...feedback, [name]: value });
    };

    // Validate the form
    const validate = () => {
        const newErrors = {};
        if (!feedback.name) newErrors.name = 'Name is required';
        if (!feedback.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(feedback.email)) newErrors.email = 'Email is invalid';
        if (!feedback.message) newErrors.message = 'Message is required';
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

        // Save feedback to local storage
        const existingFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
        existingFeedback.push(feedback);
        localStorage.setItem('feedback', JSON.stringify(existingFeedback));

        // Reset form and errors
        setFeedback({ name: '', email: '', message: '' });
        setErrors({});
        alert('Feedback submitted successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Submit Your Feedback</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={feedback.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={feedback.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        value={feedback.message}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-200"
                    >
                        Submit Feedback
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FeedbackForm;
