import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
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
                {/* Your dashboard content here */}
                <h1>Welcome to [Company Name]</h1>
            </div>
        </div>
    );
}

export default Dashboard;
