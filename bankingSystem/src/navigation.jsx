// Example for Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onFormSelect }) => {
    return (
        <nav>
            <Link to="/customer" onClick={() => onFormSelect('customer')}>Customer Form</Link>
            <Link to="/account" onClick={() => onFormSelect('account')}>Account Form</Link>
            <Link to="/loan" onClick={() => onFormSelect('loan')}>Loan Form</Link>
            <Link to="/transaction" onClick={() => onFormSelect('transaction')}>Transaction Form</Link>
            <Link to="/card" onClick={() => onFormSelect('card')}>Card Form</Link>
            <Link to="/feedback" onClick={() => onFormSelect('feedback')}>Feedback Form</Link>
            <Link to="/scheduled-payment" onClick={() => onFormSelect('scheduled-payment')}>Scheduled Payment Form</Link>
        </nav>
    );
};

export default Navbar;
