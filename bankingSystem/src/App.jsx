// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './forms/headed'; // Ensure this component is correct
// import Home from './forms/home';
// import Customer from './forms/customer';
// import Account from './forms/Account';
// import Loan from './forms/Loan';
// import Card from './forms/Card';
// import Feedback from './forms/Feedback';
// import Transaction from './forms/Transaction';
// import ScheduledPayment from './forms/ScheduledPayment';
// import Login from './loginFunctions/login';
// import RegisterPage from './registerFunctions/register';  // Correct path to RegisterPage
// import { AuthProvider } from './forms/authenticaton';  // AuthProvider import

// const App = () => {
//     return (
//         <AuthProvider> {/* Wrap the entire app with AuthProvider */}
//             <Router>
//                 <Header />
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/customer" element={<Customer />} />
//                     <Route path="/account" element={<Account />} />
//                     <Route path="/loan" element={<Loan />} />
//                     <Route path="/card" element={<Card />} />
//                     <Route path="/feedback" element={<Feedback />} />
//                     <Route path="/transaction" element={<Transaction />} />
//                     <Route path="/scheduled-payment" element={<ScheduledPayment />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/register" element={<RegisterPage />} /> {/* Correct register path */}
//                 </Routes>
//             </Router>
//         </AuthProvider>
//     );
// };

// export default App;

// src/App.jsx
// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Header from './forms/headed';
// import Home from './forms/home';
// import Customer from './forms/customer';
// import Account from './forms/Account';
// import Loan from './forms/Loan';
// import Card from './forms/Card';
// import Feedback from './forms/Feedback';
// import Transaction from './forms/Transaction';
// import ScheduledPayment from './forms/ScheduledPayment';
// import Login from './loginFunctions/login';
// import RegisterPage from './registerFunctions/register';
// import { AuthContext, AuthProvider } from './forms/authenticaton';

// const AppContent = () => {
//     const { isAuthenticated } = useContext(AuthContext);

//     return (
//         <>
//             <Header />
//             <Routes>
//                 {isAuthenticated ? (
//                     <>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/customer" element={<Customer />} />
//                         <Route path="/account" element={<Account />} />
//                         <Route path="/loan" element={<Loan />} />
//                         <Route path="/card" element={<Card />} />
//                         <Route path="/feedback" element={<Feedback />} />
//                         <Route path="/transaction" element={<Transaction />} />
//                         <Route path="/scheduled-payment" element={<ScheduledPayment />} />
//                         <Route path="*" element={<Navigate to="/" />} />
//                     </>
//                 ) : (
//                     <>
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/register" element={<RegisterPage />} />
//                         <Route path="*" element={<Navigate to="/login" />} />
//                     </>
//                 )}
//             </Routes>
//         </>
//     );
// };

// const App = () => (
//     <AuthProvider>
//         <Router>
//             <AppContent />
//         </Router>
//     </AuthProvider>
// );

// export default App;

import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './forms/headed';
import Home from './forms/home';
import Customer from './forms/Customer';
import Account from './forms/Account';
import Loan from './forms/Loan';
import Card from './forms/Card';
import Feedback from './forms/Feedback';
import Transaction from './forms/Transaction';
import ScheduledPayment from './forms/ScheduledPayment';
import Login from './loginFunctions/login';
import RegisterPage from './registerFunctions/register';
import { AuthProvider, AuthContext } from './forms/authenticaton';

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
                    <Route path="/loan" element={<ProtectedRoute element={<Loan />} />} />
                    <Route path="/card" element={<ProtectedRoute element={<Card />} />} />
                    <Route path="/feedback" element={<ProtectedRoute element={<Feedback />} />} />
                    <Route path="/transaction" element={<ProtectedRoute element={<Transaction />} />} />
                    <Route path="/scheduled-payment" element={<ProtectedRoute element={<ScheduledPayment />} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;


