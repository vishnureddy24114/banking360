// // src/AuthContext.js
// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     // Check localStorage for initial authentication state
//     const [isAuthenticated, setIsAuthenticated] = useState(
//         () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
//     );

//     const login = () => {
//         setIsAuthenticated(true);
//         localStorage.setItem('isAuthenticated', JSON.stringify(true)); // Save to localStorage
//     };

//     const logout = () => {
//         setIsAuthenticated(false);
//         localStorage.removeItem('isAuthenticated'); // Clear from localStorage
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// src/forms/authenticaton.jsx
// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         // Check `isAuthenticated` status from localStorage on app load
//         const storedAuth = JSON.parse(localStorage.getItem('isAuthenticated'));
//         setIsAuthenticated(storedAuth === true);
//     }, []);

//     const login = () => {
//         setIsAuthenticated(true);
//         localStorage.setItem('isAuthenticated', JSON.stringify(true));
//     };

//     const logout = () => {
//         setIsAuthenticated(false);
//         localStorage.removeItem('isAuthenticated');
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Always start with `false` to require login each visit
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
