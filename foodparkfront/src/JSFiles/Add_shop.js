import React, { useState } from 'react';

const AddShop = () => {
    const [formData, setFormData] = useState({
        so_name: '',
        shope_name: '',
        menu: null,
        so_number: '',
        so_email: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const validateForm = () => {
        const errors = {};
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const allowedFileType = 'text/plain';

        // Validate phone number
        if (!phoneRegex.test(formData.so_number)) {
            errors.so_number = 'Phone number must be exactly 10 digits.';
        }

        // Validate email
        if (!emailRegex.test(formData.so_email)) {
            errors.so_email = 'Invalid email format.';
        }

        // Validate menu file
        if (formData.menu && formData.menu.type !== allowedFileType) {
            errors.menu = 'Only .txt files are allowed for the menu.';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop submission if there are validation errors
        }

        // Create FormData object to handle file uploads
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        // Replace with your API endpoint
        const apiUrl = '/api/shops'; 

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Form submitted successfully:', result);
                setFormData({
                    so_name: '',
                    shope_name: '',
                    menu: null,
                    so_number: '',
                    so_email: ''
                }); // Clear form after successful submission
            } else {
                console.error('Form submission error:', await response.text());
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Add New Shop</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="so_name" className="block text-sm font-medium text-gray-700">Shop Owner Name:</label>
                    <input
                        type="text"
                        id="so_name"
                        name="so_name"
                        value={formData.so_name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="shope_name" className="block text-sm font-medium text-gray-700">Shop Name:</label>
                    <input
                        type="text"
                        id="shope_name"
                        name="shope_name"
                        value={formData.shope_name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="menu" className="block text-sm font-medium text-gray-700">Menu (File Upload):</label>
                    <input
                        type="file"
                        id="menu"
                        name="menu"
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-indigo-50 hover:file:bg-indigo-100"
                    />
                    {errors.menu && <p className="text-red-500 text-xs mt-1">{errors.menu}</p>}
                </div>
                <div>
                    <label htmlFor="so_number" className="block text-sm font-medium text-gray-700">Shop Owner Number:</label>
                    <input
                        type="number"
                        id="so_number"
                        name="so_number"
                        value={formData.so_number}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.so_number && <p className="text-red-500 text-xs mt-1">{errors.so_number}</p>}
                </div>
                <div>
                    <label htmlFor="so_email" className="block text-sm font-medium text-gray-700">Shop Owner Email:</label>
                    <input
                        type="email"
                        id="so_email"
                        name="so_email"
                        value={formData.so_email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.so_email && <p className="text-red-500 text-xs mt-1">{errors.so_email}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add Shop
                </button>
            </form>
        </div>
    );
};

export default AddShop;
