import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Subnav = () => {
    const [isAcademicMenuOpen, setIsAcademicMenuOpen] = useState(false);
    const [isInformationMenuOpen, setIsInformationMenuOpen] = useState(false);
    const academicMenuRef = useRef(null);
    const informationMenuRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
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

    const toggleAcademicMenu = () => {
        setIsAcademicMenuOpen(!isAcademicMenuOpen);
    };

    const toggleInformationMenu = () => {
        setIsInformationMenuOpen(!isInformationMenuOpen);
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-start space-x-6 py-4">
                    <div className="relative" ref={academicMenuRef}>
                        <button
                            onClick={toggleAcademicMenu}
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:bg-gray-700 flex"
                        >
                            Academic
                            <svg
                                className={`ml-1 h-5 w-5 ${!isAcademicMenuOpen ? 'transform rotate-180' : ''}`}
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
                            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
                                        to="/all-headmaster"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        All Headmaster
                                    </NavLink>
                                    <NavLink
                                        to="/all-success-student-information"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        All Success Student Information
                                    </NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative" ref={informationMenuRef}>
                        <button
                            onClick={toggleInformationMenu}
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:bg-gray-700 flex"
                        >
                            Information
                            <svg
                                className={`ml-1 h-5 w-5 ${!isInformationMenuOpen ? 'transform rotate-180' : ''}`}
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
                            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <NavLink
                                        to="/donor-list"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        Donor List
                                    </NavLink>
                                    <NavLink
                                        to="/founder-list"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        activeClassName="bg-gray-100"
                                    >
                                        Founder List
                                    </NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                    <NavLink className="text-white px-3 py-2 rounded-md text-sm font-medium" to="/notice">
                        Notice
                    </NavLink>
                    <NavLink className="text-white px-3 py-2 rounded-md text-sm font-medium" to="/result">
                        Result
                    </NavLink>
                    <NavLink className="text-white px-3 py-2 rounded-md text-sm font-medium" to="/admission">
                        Admission
                    </NavLink>
                    <NavLink className="text-white px-3 py-2 rounded-md text-sm font-medium" to="/about">
                        About
                    </NavLink>
                    <NavLink className="text-white px-3 py-2 rounded-md text-sm font-medium" to="/contact">
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Subnav;
