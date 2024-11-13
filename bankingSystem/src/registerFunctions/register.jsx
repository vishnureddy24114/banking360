import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Both username and password are required');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((user) => user.username === username);

        if (userExists) {
            setError('Username already exists');
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert(`User registered: ${username}`);
            navigate('/login'); // Redirect to login page after registration
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-purple-600 text-white">
            <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Register</h2>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;

