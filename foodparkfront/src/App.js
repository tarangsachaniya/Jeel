import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';// Adjust the import path as needed
import Home from './JSFiles/Home';   // Add your Home component or other routes here
import Add_shop from './JSFiles/Add_shop.js';
import AuthContainer from './JSFiles/AuthContainer.js';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />    Your home page
            <Route path="/auth" element={<AuthContainer />} /> {/* Your login page */}
            <Route path="/add_shop" element={<Add_shop />} /> {/* Your login page */}

            {/* Add more routes here */}
        </Routes>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
export default App