import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center space-x-4">
                <div>
                    <img
                        className="h-24"
                        src={'https://cdnl.iconscout.com/lottie/premium/thumb/error-404-5631133-4699352.gif'}
                        alt="Error"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops! Something went wrong.</h2>
                    <p className="text-gray-600 mb-4">We're sorry, but an unexpected error occurred.</p>
                    <Link to={'/'}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none">
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
