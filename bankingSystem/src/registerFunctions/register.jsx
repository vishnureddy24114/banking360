// import React, { useState, useContext } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { AuthContext } from '../forms/authenticaton';

// const RegisterPage = () => {
//     const { login } = useContext(AuthContext); 
//     const navigate = useNavigate();

//     const [userData, setUserData] = useState({
//         username: '',
//         password: '',
//         mobileNumber: '',
//         ssn: '',  // Add SSN field
//     });
//     const [error, setError] = useState(''); 

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUserData({
//             ...userData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate input fields
//         if (!userData.username || !userData.password || !userData.mobileNumber || !userData.ssn) {
//             setError('All fields are required.');
//             return;
//         }

//         if (userData.password.length < 8) {
//             setError('Password must be at least 8 characters long.');
//             return;
//         }

//         const mobileRegex = /^\d{10}$/;
//         if (!mobileRegex.test(userData.mobileNumber)) {
//             setError('Please enter a valid mobile number (10 digits only).');
//             return;
//         }

//         const ssnRegex = /^\d{12}$/;  // SSN format regex (xxx-xx-xxxx)
//         if (!ssnRegex.test(userData.ssn)) {
//             setError('Please enter a valid SSN (format: xxx-xx-xxxx).');
//             return;
//         }

//         const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
//         const usernameExists = existingUsers.some(user => user.username === userData.username);
//         const ssnExists = existingUsers.some(user => user.ssn === userData.ssn);

//         if (usernameExists) {
//             setError('Username already exists.');
//             return;
//         }

//         if (ssnExists) {
//             setError('SSN is already registered.');
//             return;
//         }

//         // Add the new user to the list of existing users
//         existingUsers.push(userData);
//         localStorage.setItem('users', JSON.stringify(existingUsers));

//         login();  
//         alert('User registered successfully!');
//         setUserData({
//             username: '',
//             password: '',
//             mobileNumber: '',
//             ssn: '',  // Clear SSN field after successful registration
//         });
//         setError('');
//         navigate('/login');
//     };

//     return (
//         <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
//             <div className="bg-white shadow-lg rounded-lg p-8 w-96">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//                 {error && <div className="text-red-500 mb-4">{error}</div>}

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <input
//                         type="text"
//                         name="username"
//                         placeholder="Username"
//                         value={userData.username}
//                         onChange={handleChange}
//                         className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={userData.password}
//                         onChange={handleChange}
//                         className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         name="mobileNumber"
//                         placeholder="Mobile Number"
//                         value={userData.mobileNumber}
//                         onChange={handleChange}
//                         className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="text"
//                         name="ssn"
//                         placeholder="SSN (xxx-xx-xxxx)"
//                         value={userData.ssn}
//                         onChange={handleChange}
//                         className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//                         Register
//                     </button>
//                 </form>
//                 <p className="text-center mt-4">
//                     Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default RegisterPage;

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

