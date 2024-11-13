import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './forms/headed';
import Home from './forms/home';
import Customer from './forms/Customer';
import Account from './forms/Account';
import Loan from './forms/Loan';
import Card from './forms/Card';
import Feedback from './forms/Feedback';
import ScheduledPayment from './forms/ScheduledPayment';
import Login from './loginFunctions/login';
import RegisterPage from './registerFunctions/register';
import { AuthProvider, AuthContext } from './forms/authenticaton';
import Branch from './forms/branch';
import AccountHolder from './forms/accountHolder';
import Employee from './forms/employee';
import EmployeeSalary from './forms/employeeSalary';
import LoanRepayments from './forms/loanRepayment';
import ATMLocations from './forms/atmLocations';
import CardTransaction from './forms/cardTransaction';
import ATMTransaction from './forms/ATMTransactions';
import AccountTransaction from './forms/accountTransactions';
import FixedDeposit from './forms/fixedDeposite';
import Overdraft from './forms/overDraft';
import LoanTypes from './forms/loanTypes';
import EmployeeRoles from './forms/employeeRoles';
import TransactionTypes from './forms/transactionTypes';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/" element={<ProtectedRoute element={<Home />} />} />
                    <Route path="/customer" element={<ProtectedRoute element={<Customer />} />} />
                    <Route path="/account" element={<ProtectedRoute element={<Account />} />} />
                    <Route path="/fixedDeposite" element={<ProtectedRoute element={<FixedDeposit />} />} />
                    <Route path="/overDraft" element={<ProtectedRoute element={<Overdraft />} />} />
                    <Route path="/accountHolder" element={<ProtectedRoute element={<AccountHolder />} />} />
                    <Route path="/accountTransactions" element={<ProtectedRoute element={<AccountTransaction />} />} />
                    <Route path="/loan" element={<ProtectedRoute element={<Loan />} />} />
                    <Route path="/loanTypes" element={<ProtectedRoute element={<LoanTypes />} />} />
                    <Route path="/loanRepayment" element={<ProtectedRoute element={<LoanRepayments />} />} />
                    <Route path="/card" element={<ProtectedRoute element={<Card />} />} />
                    <Route path="/cardTransaction" element={<ProtectedRoute element={<CardTransaction />} />} />
                    <Route path="/atmLocations" element={<ProtectedRoute element={<ATMLocations />} />} />
                    <Route path="/ATMTransactions" element={<ProtectedRoute element={<ATMTransaction />} />} />
                    <Route path="/transactionTypes" element={<ProtectedRoute element={<TransactionTypes />} />} />
                    <Route path="/feedback" element={<ProtectedRoute element={<Feedback />} />} />
                    <Route path="/scheduled-payment" element={<ProtectedRoute element={<ScheduledPayment />} />} />
                    <Route path="/branch" element={<ProtectedRoute element={<Branch />} />} />
                    <Route path="/employee" element={<ProtectedRoute element={<Employee />} />} />
                    <Route path="/employeeSalary" element={<ProtectedRoute element={<EmployeeSalary />} />} />
                    <Route path="/employeeRoles" element={<ProtectedRoute element={<EmployeeRoles />} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;


