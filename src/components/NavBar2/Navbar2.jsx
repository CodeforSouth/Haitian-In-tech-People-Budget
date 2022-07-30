import React from 'react';
import './NavBar2.css';

const NavBar2 = () => {
    return (
        <div className="navbar">
            <div className="logo"></div>
            <div className="options">
                <div className="highlight">Home</div>
                <div>Budget</div>
                <div>Initiatives</div>
                <div>Open API</div>
                <div>Contact</div>
            </div>
            <div className="requests"><button className="request-button">Request an Issues</button></div>
        </div>
    );
};

export default NavBar2;
