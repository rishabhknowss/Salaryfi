import React, { useState } from 'react';
import './LandingPage.css';
import './Login.css'; 
import {useNavigate } from 'react-router-dom';

function Login() {
  const [accountAddress, setAccountAddress] = useState(null);
  const [companyName, setCompanyName] = useState('');
  
  const navigate = useNavigate();

  const handleMetaMaskConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          setAccountAddress(accounts[0]);
          console.log('Connected with the account:', accounts[0]);
          // You can store this account or use it to interact with the Ethereum blockchain
        }
      } catch (error) {
        console.error('User rejected the connection request');
      }
    } else {
      alert('Please install MetaMask to connect!');
    }
  };

  const handleLogin = () => {
    // This function will navigate the user to the dashboard and pass the company name
    navigate('/Dashboard', { state: { companyName: companyName } });
  };

  return (
    <div className="landingContainer"> 
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input 
              type="text" 
              id="companyName" 
              name="companyName" 
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="button-container"> 
            <button type="button" onClick={handleLogin}>Login</button>
            <button type="button" className="connect-button" onClick={handleMetaMaskConnection}>
              {accountAddress || 'Connect MetaMask'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
