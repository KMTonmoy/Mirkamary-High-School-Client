import React, { useState, useEffect } from 'react';

const Faq = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/faq.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setFaqs(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq) => (
                    <div key={faq.id} className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
