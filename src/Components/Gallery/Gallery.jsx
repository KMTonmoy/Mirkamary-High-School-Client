import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPhoto, setSelectedPhoto] = useState(null); // State to track selected photo for modal
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('Photo.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setPhotos(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = photos.slice(firstIndex, lastIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < Math.ceil(photos.length / itemsPerPage)) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const openModal = (photo) => {
        setSelectedPhoto(photo);
    };

    const closeModal = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Memorial Photo Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {currentItems.map((photo) => (
                        <motion.div
                            key={photo.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openModal(photo)} // Open modal on image click
                        >
                            <img src={photo.url} alt={photo.title} className="w-full h-64 object-cover cursor-pointer" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{photo.title}</h3>
                                <Link
                                    to={`photodetails/${photo._id}`}
                                    className="mt-2 block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
                                >
                                    Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {selectedPhoto && ( // Render modal if selectedPhoto is not null
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="max-w-screen-lg mx-auto relative">
                            <motion.img
                                src={selectedPhoto.url}
                                alt={selectedPhoto.title}
                                className="max-h-screen max-w-screen-lg mx-auto"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <button
                                className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                                onClick={closeModal}
                            >
                                <FaTimes />
                            </button>
                        </div>
                    </div>
                )}

                <div className="flex justify-center mt-8">
                    <button
                        onClick={prevPage}
                        className={`mx-1 px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
                            }`}
                        disabled={currentPage === 1}
                    >
                        <FaChevronLeft className="inline-block mr-1" />
                        Prev
                    </button>
                    {Array.from({ length: Math.ceil(photos.length / itemsPerPage) }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`mx-1 px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={nextPage}
                        className={`mx-1 px-4 py-2 rounded-md ${currentPage === Math.ceil(photos.length / itemsPerPage)
                            ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                            }`}
                        disabled={currentPage === Math.ceil(photos.length / itemsPerPage)}
                    >
                        Next
                        <FaChevronRight className="inline-block ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
