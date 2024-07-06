import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const TeacherDetails = () => {
    const data = useLoaderData();

    if (!data) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex justify-center mb-4">
                    <img src={data?.image} alt={data?.name} className="rounded-full w-32 h-32" />
                </div>
                <h2 className="text-3xl font-semibold text-center mb-2">{data?.name}</h2>
                <p className="text-lg text-gray-700 text-center mb-4">{data?.role}</p>
                <div className="text-center mb-4">
                    <p className="flex items-center justify-center text-gray-600 mb-2">
                        <FaEnvelope className="mr-2" /> {data?.email}
                    </p>
                    <p className="flex items-center justify-center text-gray-600 mb-4">
                        <FaPhone className="mr-2" /> {data?.phone}
                    </p>
                    <div className="flex justify-between text-gray-600">
                        <p>Joined: {data?.joinYear}</p>
                        <p>Retired: {data?.retireYear}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeacherDetails;
