import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import TermsSkeleton from "../../skeleton/about/TermsSkeleton.jsx";

const TermsAndConditions = () => {
    const [loading, setLoading] = useState(true); // Simulate loading state

    // Simulate data fetching
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500); // 1 second delay for loading simulation
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <TermsSkeleton />;
    }

    return (
        <div className="bg-gray-100 md:p-8 p-5">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
                    Terms & Conditions
                </h1>

                <div className="text-gray-600 mb-8">
                    <p className="mb-4">
                        Welcome to [Restaurant Name]. These terms and conditions outline the rules and regulations for the use of our
                        website and services. By accessing this website, we assume you accept these terms and conditions. Do not
                        continue to use [Restaurant Name] if you do not agree to take all of the terms and conditions stated on this
                        page.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                        1. License to Use
                    </h2>
                    <p className="mb-4">
                        Unless otherwise stated, [Restaurant Name] and/or its licensors own the intellectual property rights for all
                        material on this website. All intellectual property rights are reserved. You may access this from [Restaurant
                        Name] for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                        2. Reservation Policy
                    </h2>
                    <p className="mb-4">
                        Reservations are subject to availability and we reserve the right to cancel or amend a reservation in the event
                        of unforeseen circumstances. We recommend arriving 10-15 minutes before your scheduled reservation time.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                        3. Payment and Pricing
                    </h2>
                    <p className="mb-4">
                        All prices are subject to change without prior notice. We accept major credit and debit cards. Payments must be
                        made at the time of order placement. If a payment is declined or not authorized, your order will not be
                        processed.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                        4. Cancellation Policy
                    </h2>
                    <p className="mb-4">
                        If you wish to cancel a reservation, please contact us at least 24 hours in advance. We reserve the right to
                        charge a cancellation fee for no-shows or late cancellations.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                        5. Customer Conduct
                    </h2>
                    <p className="mb-4">
                        We expect all guests to conduct themselves in a respectful manner while dining at our restaurant. We reserve
                        the right to refuse service to any individual who displays inappropriate behavior.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                        6. Changes to Terms
                    </h2>
                    <p className="mb-4">
                        We reserve the right to update or change these terms and conditions at any time. Changes will be posted on this
                        page, and your continued use of the site and services will constitute acceptance of any amended terms.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                        7. Contact Us
                    </h2>
                    <p className="mb-4">
                        If you have any questions or concerns about these terms, please contact us at [ engr.rehad@gmail.com ].
                    </p>
                </div>

                <div className="flex justify-center">
                    <FaCheckCircle className="text-green-500 text-4xl" />
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
