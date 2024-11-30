import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './authenticaton'; // Adjusted import path for AuthContext

const Header = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    // State to track which dropdown is open (null if none is open)
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (name) => {
        if (isAuthenticated) {
            // Toggle the clicked dropdown and close others
            setOpenDropdown((prev) => (prev === name ? null : name));
        }
    };

    const handleLinkClick = (path) => {
        if (isAuthenticated) {
            navigate(path);
            setOpenDropdown(null); // Close any open dropdown after navigation
        } else {
            navigate('/login'); // Redirect to login if not authenticated
        }
    };

    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex space-x-4 justify-center">
                <li>
                    <Link 
                        to="/" 
                        onClick={(e) => handleLinkClick('/')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Home
                    </Link>
                </li>

                <li>
                     <Link 
                        to="/customer" 
                        onClick={(e) => handleLinkClick(null, "Customer", '/customer')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Customer
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/account" 
                        onClick={(e) => handleLinkClick(null, "Account", '/account')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Account
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/fixedDeposite" 
                        onClick={(e) => handleLinkClick(null, "Fixed Deposite", '/fixedDeposite')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        FixDeposite
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/overDraft" 
                        onClick={(e) => handleLinkClick(null, "OverDraft", '/overDraft')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        OverDraft
                    </Link>
                </li>

                {/* Transactions Dropdown */}
                <li className="relative">
                    <button
                        onClick={() => toggleDropdown('transaction')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={!isAuthenticated}
                    >
                        Transactions
                    </button>
                    {openDropdown === 'transaction' && (
                        <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48 text-left">
                            <li>
                                <button 
                                    onClick={() => handleLinkClick('/accountTransactions')}
                                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                                    disabled={!isAuthenticated}
                                >
                                    Account Transactions
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleLinkClick('/cardTransaction')}
                                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                                    disabled={!isAuthenticated}
                                >
                                    Card Transactions
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleLinkClick('/ATMTransactions')}
                                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                                    disabled={!isAuthenticated}
                                >
                                    ATM Transactions
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleLinkClick('/transactionTypes')}
                                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                                    disabled={!isAuthenticated}
                                >
                                    Transaction Types
                                </button>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Loan Management Dropdown */}
                <li className="relative">
                    <button
                        onClick={() => toggleDropdown('loan')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={!isAuthenticated}
                    >
                        Loan Management
                    </button>
                    {openDropdown === 'loan' && (
                        <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48 text-left">
                            <li>
                                <button 
                                    onClick={() => handleLinkClick('/loan')}
                                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                                    disabled={!isAuthenticated}
                                >
                                    Loan
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleLinkClick('/loanTypes')}
                                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                                    disabled={!isAuthenticated}
                                >
                                    Loan Types
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleLinkClick('/loanRepayment')}
                                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                                    disabled={!isAuthenticated}
                                >
                                    Loan Repayment
                                </button>
                            </li>
                        </ul>
                    )}
                </li>

                <li>
                    <Link 
                        to="/scheduledpayment" 
                        onClick={(e) => handleLinkClick('/branch')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Schedule Payments
                    </Link>
                </li>

                {/* Employee Management Dropdown */}
                <li className="relative">
                    <button
                        onClick={() => toggleDropdown('employee')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={!isAuthenticated}
                    >
                        Employee Management
                    </button>
                    {openDropdown === 'employee' && (
                        <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48 text-left">
                            <li>
                                <button 
                                    onClick={() => handleLinkClick('/employee')}
                                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                                    disabled={!isAuthenticated}
                                >
                                    Employee
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleLinkClick('/employeeSalary')}
                                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                                    disabled={!isAuthenticated}
                                >
                                    Employee Salary
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleLinkClick('/employeeRoles')}
                                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                                    disabled={!isAuthenticated}
                                >
                                    Employee Roles
                                </button>
                            </li>
                        </ul>
                    )}
                </li>

                <li>
                    <Link 
                        to="/feedback" 
                        onClick={(e) => handleLinkClick('/feedback')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Feedback
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/branch" 
                        onClick={(e) => handleLinkClick('/branch')}
                        className={`text-white ${!isAuthenticated ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        Branches
                    </Link>
                </li>

                {isAuthenticated ? (
                    <li>
                        <button 
                            onClick={() => {
                                logout();
                                navigate('/login');
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
