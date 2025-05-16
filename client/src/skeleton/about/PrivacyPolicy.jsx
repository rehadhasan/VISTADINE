import React from 'react';
import { FaUserShield } from 'react-icons/fa';

const PrivacyPolicy = () => {
    return (
        <div className="bg-bg-secondary p-8">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg">
                <div className="flex items-center justify-center mb-6">
                    <FaUserShield className="text-green-500 text-4xl mr-3" />
                    <h1 className="text-3xl font-extrabold text-black text-opacity-90">Privacy Policy</h1>
                </div>

                <div className="text-black text-opacity-80 mb-8">
                    <p className="mb-4">
                        At The Super Restaurant, we value your privacy and are committed to protecting your personal information. This
                        Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our
                        services. Please read this policy carefully to understand our practices regarding your personal information.
                    </p>

                    <h2 className="text-2xl font-bold text-black text-opacity-80 mt-8 mb-4">
                        1. Information We Collect
                    </h2>
                    <p className="mb-4">
                        We may collect personal information that you provide directly to us, such as your name, email address, phone
                        number, and payment details when you make a reservation, order food online, or contact us for customer service.
                    </p>
                    <p className="mb-4">
                        We also collect information automatically as you navigate through our site, including IP address, browser type,
                        and browsing behavior, using cookies and similar technologies.
                    </p>

                    <h2 className="text-2xl font-bold text-black text-opacity-80 mt-8 mb-4">
                        2. How We Use Your Information
                    </h2>
                    <p className="mb-4">
                        We use your personal information to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Process and manage your reservations and online orders.</li>
                        <li>Respond to your inquiries and provide customer support.</li>
                        <li>Send you updates, promotions, and other information that may be of interest to you.</li>
                        <li>Improve our website and services based on your feedback and usage patterns.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-black text-opacity-80 mt-8 mb-4">
                        3. Sharing Your Information
                    </h2>
                    <p className="mb-4">
                        We do not sell, trade, or otherwise transfer your personal information to outside parties except in the
                        following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>To trusted service providers who assist us in operating our website and services, as long as they agree to keep your information confidential.</li>
                        <li>To comply with legal obligations, such as responding to a subpoena or other legal request.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-black text-opacity-80800 mt-8 mb-4">
                        4. Data Security
                    </h2>
                    <p className="mb-4">
                        We implement various security measures to protect your personal information. However, no method of
                        transmission over the Internet is completely secure, and we cannot guarantee the absolute security of your
                        data.
                    </p>

                    <h2 className="text-2xl font-bold text-black text-opacity-80 mt-8 mb-4">
                        5. Your Choices
                    </h2>
                    <p className="mb-4">
                        You can choose not to provide certain information or opt out of receiving promotional emails by following the
                        unsubscribe link in those emails. Please note that you may still receive non-promotional messages, such as
                        order confirmations and reservation reminders.
                    </p>

                    <h2 className="text-2xl font-bold text-black text-opacity-80 mt-8 mb-4">
                        6. Changes to This Policy
                    </h2>
                    <p className="mb-4">
                        We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting
                        the new policy on our website. Your continued use of our website and services after such changes constitutes
                        your acceptance of the revised policy.
                    </p>

                    <h2 className="text-2xl font-bold text-black text-opacity-80 mt-8 mb-4">
                        7. Contact Us
                    </h2>
                    <p className="mb-4">
                        If you have any questions or concerns about this Privacy Policy, please contact us at [ engr.rehad@gmail.com ].
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
