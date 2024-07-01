import React, { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="border-b bg-gray-800 p-4 relative z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center relative z-50">
      
                <div className="flex items-center">
                    <img
                        className="h-12 rounded-full"
                        src="https://school360.xyz/200525/200525_media/logos/contact_1663821972_2022-09-22.png"
                        alt="Logo"
                    />
                    <h1 className="text-white  md:text-2xl font-bold ml-4">Mirkamary High School</h1>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-4">


                    {/* Dropdown Menu */}
                    {user && (
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="relative z-50 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                            >
                                <img
                                    className="h-auto w-11 rounded-full"
                                    src={user.photoURL || 'https://via.placeholder.com/40'}
                                    alt="User"
                                />
                            </button>
                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        ref={dropdownRef}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                                    >
                                        <Link
                                            to="/dashboard"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Dashboard
                                        </Link>
                                        <Link
                                            to="/settings"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Settings
                                        </Link>
                                        <button
                                            onClick={() => { logOut(); setDropdownOpen(false); }}
                                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                                        >
                                            Logout
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}

                    {/* Login and Signup Buttons */}
                    {!user && (
                        <div className="flex space-x-4">
                            <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Login
                            </Link>
                            <Link to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                SignUp
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
