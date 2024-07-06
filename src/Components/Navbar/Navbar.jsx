import React, { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const [isAcademicMenuOpen, setIsAcademicMenuOpen] = useState(false);
    const [isInformationMenuOpen, setIsInformationMenuOpen] = useState(false);
    const academicMenuRef = useRef(null);
    const informationMenuRef = useRef(null);

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            if (
                academicMenuRef.current &&
                !academicMenuRef.current.contains(event.target) &&
                isAcademicMenuOpen
            ) {
                setIsAcademicMenuOpen(false);
            }
            if (
                informationMenuRef.current &&
                !informationMenuRef.current.contains(event.target) &&
                isInformationMenuOpen
            ) {
                setIsInformationMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isAcademicMenuOpen, isInformationMenuOpen]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleAcademicMenu = () => {
        setIsAcademicMenuOpen(!isAcademicMenuOpen);
    };

    const toggleInformationMenu = () => {
        setIsInformationMenuOpen(!isInformationMenuOpen);
    };

    return (
        <nav className="bg-gray-800 p-4 relative z-50 border-b border-gray-700">
            <div className="max-w-7xl mx-auto flex justify-between items-center relative z-50">
                <div className="flex items-center">
                    <img
                        className="h-12 rounded-full"
                        src="https://school360.xyz/200525/200525_media/logos/contact_1663821972_2022-09-22.png"
                        alt="Logo"
                    />
                    <h1 className="text-white md:text-2xl font-bold ml-4">Mirkamary High School</h1>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-4">
                    {user && (
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
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
                                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
                                        style={{ zIndex: 9999 }}
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

            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-t border-gray-700">
                <div className="flex justify-center md:justify-start flex-wrap space-x-6 py-4">
                    <NavLink className="text-white px-3 py-2 rounded-md text-sm font-medium" to="/" exact>
                        Home
                    </NavLink>
                    <div className="relative" ref={academicMenuRef}>
                        <button
                            onClick={toggleAcademicMenu}
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:bg-gray-700 flex items-center"
                        >
                            Academic
                            <svg
                                className={`ml-1 h-5 w-5 transition-transform ${isAcademicMenuOpen ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 0 1 .707.293l5 5a1 1 0 0 1-1.414 1.414L11 6.414V16a1 1 0 1 1-2 0V6.414L5.707 9.707a1 1 0 1 1-1.414-1.414l5-5A1 1 0 0 1 10 3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isAcademicMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                            >
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <NavLink
                                        to="/managing-committee"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        Managing Committee
                                    </NavLink>
                                    <NavLink
                                        to="/teachers-information"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        Teacher's Information
                                    </NavLink>
                                    <NavLink
                                        to="/admin-staff"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        Admin/Staff
                                    </NavLink>
                                    <NavLink
                                        to="/all-student-information"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        All Student Information
                                    </NavLink>

                                    <NavLink
                                        to="/all-success-student-information"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        All Success Student Information
                                    </NavLink>
                                </div>
                            </motion.div>
                        )}
                    </div>
                    <div className="relative" ref={informationMenuRef}>
                        <button
                            onClick={toggleInformationMenu}
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:bg-gray-700 flex items-center"
                        >
                            Information
                            <svg
                                className={`ml-1 h-5 w-5 transition-transform ${isInformationMenuOpen ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 0 1 .707.293l5 5a1 1 0 0 1-1.414 1.414L11 6.414V16a1 1 0 1 1-2 0V6.414L5.707 9.707a1 1 0 1 1-1.414-1.414l5-5A1 1 0 0 1 10 3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isInformationMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                            >
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <NavLink
                                        to="/important-website-link"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        Important Website Link
                                    </NavLink>
                                    <NavLink
                                        to="/teachers-class-routine"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        Teacher's Class Routine
                                    </NavLink>
                                    <NavLink
                                        to="/teachers-attendance-information"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        Teacher's Attendance Information
                                    </NavLink>
                                    <NavLink
                                        to="/calendar"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        Calendar
                                    </NavLink>
                                    <NavLink
                                        to="/attendance-information"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        Attendance Information
                                    </NavLink>
                                </div>
                            </motion.div>
                        )}
                    </div>
                    <NavLink
                        className="text-white px-3 py-2 rounded-md text-sm font-medium"
                        to="/admission-information"
                        activeClassName="bg-gray-700"
                    >
                        Admission Information
                    </NavLink>

                    <NavLink
                        className="text-white px-3 py-2 rounded-md text-sm font-medium"
                        to="/contact"
                        activeClassName="bg-gray-700"
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        className="text-white px-3 py-2 rounded-md text-sm font-medium"
                        to="/about-us"
                        activeClassName="bg-gray-700"
                    >
                        About Us
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;

