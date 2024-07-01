import React from 'react';

const Footer = () => {
    // Get current year dynamically
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-gray-800 text-white py-4">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-xl font-bold">MIRKAMARY ADARSHA HIGH SCHOOL</h1>
                        <p className="text-sm">MIRKAMARY-ISHWARDI, POST CODE-6620</p>
                        <p className="text-sm">Phone: 01309125513, 01714503412, 01709844486</p>
                        <p className="text-sm">Email: 125513hs@gmail.com</p>
                    </div>
                    <nav className="flex space-x-4 mb-4 md:mb-0">
                        <a href="#" className="text-gray-300 hover:text-white">Home</a>
                        <a href="#" className="text-gray-300 hover:text-white">About</a>
                        <a href="#" className="text-gray-300 hover:text-white">History</a>
                        <a href="#" className="text-gray-300 hover:text-white">Notice</a>
                        <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                    </nav>
                </div>
            </footer>
            <div className="bg-gray-900 py-2">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between items-center">
                    <p className="text-sm text-gray-400">
                        Copyright © {currentYear}, All Rights Reserved, MIRKAMARY ADARSHA HIGH SCHOOL
                    </p>
                    <p className="text-sm text-gray-400">
                        Developed By - Tonmoy Ahamed<br />
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
