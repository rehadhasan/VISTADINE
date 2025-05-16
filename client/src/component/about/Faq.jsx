// src/components/FAQ.js
import React, { useState, useEffect } from 'react';
import FAQSkeleton from "../../skeleton/about/FAQSkeleton.jsx";
import FaqStore from "../../store/FaqStore.js";

const FAQ = () => {
    const {FaqList} = FaqStore()
    const [openIndex, setOpenIndex] = useState(0);
    const [loading, setLoading] = useState(true); // Simulate loading state

    // Simulate data fetching
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500); // 1 seconds
        return () => clearTimeout(timer);
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? 0 : index);
    };

    if (FaqList === null || loading) {
        return <FAQSkeleton />;
    }

    return (
        <section className='bg-white'>
            <div className="max-w-2xl mx-auto p-6">
                {FaqList.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className={`flex justify-between items-center w-full text-left p-4 ${
                                openIndex === index ? "bg-primary text-white" : "bg-black bg-opacity-5 text-black text-opacity-70"
                            } rounded-md focus:outline-none`}
                        >
                            <span className="font-semibold">{faq.question}</span>
                            <span>
                            {openIndex === index ? (
                                <span>&#x2212;</span> // Minus sign
                            ) : (
                                <span>&#x2b;</span> // Plus sign
                            )}
                        </span>
                        </button>
                        {openIndex === index && (
                            <div
                                className="p-4 bg-white text-black text-opacity-70 border border-t-0 border-black border-opacity-20 rounded-b-md">
                                <p>
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
