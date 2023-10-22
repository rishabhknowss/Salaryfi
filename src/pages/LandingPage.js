import React from 'react';
import logo from '/home/cheemu-rai/salaryfi/src/assests/images/logo.png';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import './LandingPage.css'; 

function LandingPage() {
    return (
        <Container className="landingContainer">
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar className="Toolbar">
                    <Typography variant="h6">Salaryfi</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button color="inherit">HOME</Button>
                    <Button color="inherit">DASHBOARD</Button>
                    <Button color="inherit">WALLET</Button>
                    <Button color="inherit">CONTACT</Button>
                </Toolbar>
            </AppBar>

            <Box display="flex" height="100vh" alignItems="center" justifyContent="space-between">
                {/* Left Side Content */}
                <Box className="leftSide">
                    <Typography variant="h1" gutterBottom>Pay Salaries.</Typography>
                    <Typography variant="h5" gutterBottom>
                        A modern payroll solution for remote work, providing secure, private salary payments.
                    </Typography>
                    <button class="paynow-button">Pay Now</button>

                </Box>
                <div className="ethereum-powered">Powered by Ethereum</div>
                
                {/* Right Side Logo */}
                <Box className="rightSide">
                    <img src={logo} alt="Salaryfi Logo" className="logoImage" />
                </Box>
            </Box>
        </Container>
    );
}

export default LandingPage;
