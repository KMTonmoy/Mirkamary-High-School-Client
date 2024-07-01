import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { loading, signIn, signInWithGoogle } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await signIn(email, password);
            Swal.fire({
                title: 'Login Successful',
                text: 'You have successfully logged in.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(from, { replace: true });
                }
            });
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You have successfully signed in with Google.',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(from, { replace: true });
                }
            });
        } catch (error) {
            console.error("Error signing in with Google:", error);
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: error.message || 'An error occurred while signing in with Google.',
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-64 md:h-auto">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    src="https://media.istockphoto.com/id/518091186/vector/front-yard-of-school-building.jpg?s=612x612&w=0&k=20&c=fPWFjImPIYMjWdtxD6aE9FlFQCqUa2jF1QEfi-AzFPs="
                    alt="School"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg"
                >
                    <motion.h2
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-center mb-8 text-indigo-600"
                    >
                        Welcome to Mirkamary High School
                    </motion.h2>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                required
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 focus:outline-none"
                            >
                                {showPassword ? (
                                    <FaRegEye className='text-2xl mt-7' />
                                ) : (
                                    <FaRegEyeSlash className='text-2xl mt-7' />
                                )}
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-400 to-pink-600 rounded-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-700 focus:outline-none focus:bg-gradient-to-r focus:from-pink-500 focus:to-pink-700"
                        >
                            Login
                        </button>
                    </form>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-4 text-sm text-gray-500">Or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <div className="mt-8 space-y-4">
                        <motion.button
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            onClick={handleGoogleLogin}
                            disabled={loading}
                            className="w-full bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-600 flex items-center justify-center"
                        >
                            <FcGoogle className="mr-2" size={24} />
                            Sign in with Google
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
