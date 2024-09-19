import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome,FaShopify, FaInfoCircle, FaPhoneAlt, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FaShop } from "react-icons/fa6";
const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo / Home Link */}
                <Link to="/" className="text-2xl font-bold flex items-center">
                    <FaHome className="mr-2" />
                    Home
                </Link>
                
                {/* Navbar Links */}
                <div className="flex space-x-6">
                    <Link to="/shops" className="flex items-center">
                        <FaShopify className="mr-1" />
                        Shops
                    </Link>
                    <Link to="/contact" className="flex items-center">
                        <FaPhoneAlt className="mr-1" />
                        Contact Us
                    </Link>
                    <Link to="/about" className="flex items-center">
                        <FaInfoCircle className="mr-1" />
                        About Us
                    </Link>
                    <Link to="/add_shop" className="flex items-center">
                        <FaShop className="mr-1" />
                        AddShop
                    </Link>

                </div>
                
                {/* Cart and Login/Signup */}
                <div className="flex items-center space-x-4">
                    <Link to="/cart" className="flex items-center mr-2">
                        <FaShoppingCart className="text-xl" />
                    </Link>
                    <Link to="/login" className="flex items-center">
                        <FaUser className="text-xl mr-1" />
                        Login/Signup
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
