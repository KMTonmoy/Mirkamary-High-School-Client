import React, { useState, useEffect } from 'react';

const OurTeachers = () => {
    const [teachersData, setTeachersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/teacher');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setTeachersData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='container mx-auto'>
                <img src="
        https://mauv.edu.bd/core_media/themes/responsive_npf/img/National-Portal-Card-PM.jpeg
        " className='mx-auto w-full h-[38rem] ' alt="" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Our Teachers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {teachersData.map((teacher) => (
                        <div key={teacher.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={teacher.image}
                                    alt={teacher.name}
                                    className="absolute inset-0 w-full h-full  "
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{teacher.name}</h3>
                                <p className="text-gray-600 mb-2">{teacher.role}</p>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurTeachers;
