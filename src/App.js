import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Employee from './pages/Employee';

function App() {
    const [employees, setEmployees] = useState([]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={<Dashboard employees={employees} setEmployees={setEmployees} />}
                />
                <Route
                    path="/employees"
                    element={<Employee employees={employees} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
