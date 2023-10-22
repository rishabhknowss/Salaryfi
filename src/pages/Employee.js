import React from 'react';
import { Link } from 'react-router-dom';
import './Employee.css';

function Employees({ employees }) {
    
    // Handler for the Pay Now button
    const handlePayment = (employeeName) => {
        // Your payment logic here
        alert(employeeName + ' has been paid.');
    };
    const conversionRate = 0.003;

    return (
        <div className="employee-list">
            <div className="dashboard-navbar">
                <ul>
                    <li><Link to="/employees">Employees</Link></li>
                    <li><Link to="/transactions">Transactions</Link></li>
                    <li><Link to="/wallet-balance">Wallet Balance</Link></li>
                </ul>
            </div>

            <div className="employee-content">
                <h2>Employee List</h2>

                <div className="employee-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Email</th>
                                <th>Wallet Address</th>
                                <th>Salary Amount</th>
                                <th>Status</th>
                                <th>Action</th> {/* New column header */}
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr key={index}>
                                    <td>{employee.name}</td>
                                    <td>{employee.position}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.walletAddress}</td>
                                    <td>  ${employee.salaryAmount} 
                                        (~{(employee.salaryAmount * conversionRate).toFixed(2)} ETH)</td>
                                    <td>Unpaid</td> {/* Default status */}
                                    <td>
                                    <button className="paynow-btn" onClick={() => handlePayment(employee.name)}>Pay Now</button>

                                    </td> {/* New action button */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Employees;
