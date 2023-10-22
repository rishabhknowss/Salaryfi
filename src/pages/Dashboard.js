import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard({ employees, setEmployees }) {
    const [employee, setEmployee] = useState({
        name: '',
        position: '',
        email: '',
        walletAddress: '',
        salaryAmount: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = { ...employee };
        setEmployees([...employees, newEmployee]);
        setEmployee({
            name: '',
            position: '',
            email: '',
            walletAddress: '',
            salaryAmount: '',
        });
        navigate('/employees');
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-navbar">
                <ul>
                    <li><Link to="/employees">Employees</Link></li>
                    <li><Link to="/transactions">Transactions</Link></li>
                    <li><Link to="/wallet-balance">Wallet Balance</Link></li>
                </ul>
            </div>
            <div className="dashboard-content">
                <h1>Welcome to [Company Name]</h1>

                <div className="add-employee">
                    <h2>Add Employee</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={employee.name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={employee.position}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={employee.email}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="walletAddress"
                            placeholder="Wallet Address"
                            value={employee.walletAddress}
                            onChange={handleChange}
                        />
                        <div className="salary-input">
                            <span>$</span>
                            <input
                                type="number"
                                name="salaryAmount"
                                placeholder="Salary Amount"
                                value={employee.salaryAmount}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Add Employee</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
