import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './authenticaton'; // Adjusted import path for AuthContext

const Header = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLinkClick = (e, path) => {
        if (!isAuthenticated) {
            e.preventDefault(); // Prevent navigation if not authenticated
            navigate('/login'); // Redirect to login page
        } else {
            navigate(path); // Allow navigation if authenticated
        }
    };

    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex space-x-4 justify-center">
                <li>
                    <Link 
                        to="/" 
                        onClick={(e) => handleLinkClick(e, '/')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/customer" 
                        onClick={(e) => handleLinkClick(e, '/customer')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Customer
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/account" 
                        onClick={(e) => handleLinkClick(e, '/account')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Account
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/loan" 
                        onClick={(e) => handleLinkClick(e, '/loan')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Loan
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/card" 
                        onClick={(e) => handleLinkClick(e, '/card')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Card
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/feedback" 
                        onClick={(e) => handleLinkClick(e, '/feedback')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Feedback
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/transaction" 
                        onClick={(e) => handleLinkClick(e, '/transaction')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Transaction
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/scheduled-payment" 
                        onClick={(e) => handleLinkClick(e, '/scheduled-payment')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Scheduled Payment
                    </Link>
                </li>
                {isAuthenticated ? (
                    <li>
                        <button 
                            onClick={() => {
                                logout();
                                navigate('/login'); // Redirect to login after logout
                            }}
                            className="text-white hover:underline"
                        >
                            Logout
                        </button>
                    </li>
                ) : (
                    <li>
                        <Link to="/login" className="text-white hover:underline">
                            Login
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Header;




