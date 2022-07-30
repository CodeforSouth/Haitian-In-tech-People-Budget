import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Home2 from '../pages/Home2/Home2';

const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home2 />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;