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
