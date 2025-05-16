// src/components/About.js
import React, { useState, useEffect } from 'react';
import AboutSkeleton from "../../skeleton/about/AboutSkeleton.jsx";

const About = () => {
    const [loading, setLoading] = useState(true); // Simulate loading state

    // Simulate data fetching
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500); // 2 seconds
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <AboutSkeleton />;
    }

    return (
        <div className="bg-bg-secondary md:p-8 p-3">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* About Us Section */}
                <div className="text-center mb-16">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black text-opacity-90 sm:text-4xl">
                        Welcome to Our Restaurant
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-black text-opacity-90 lg:mx-auto">
                        We are passionate about serving delicious and high-quality food. Our commitment is to provide a
                        memorable dining experience for every guest who walks through our doors.
                    </p>
                </div>

                {/* Our Story Section */}
                <div className="bg-white rounded-lg shadow-lg p-5 md:p-16 text-center">
                    <h3 className="text-2xl font-extrabold text-black mb-4">Our Story</h3>
                    <p className="text-xl text-black mb-4 text-opacity-70">
                        Established in 2004, our restaurant has been a cornerstone of the community, offering a unique
                        dining experience with a focus on seasonal ingredients and culinary excellence.
                    </p>
                    <p className="text-xl text-black mb-4 text-opacity-70">
                        Our journey began with a simple idea: to create a space where people could come together to
                        enjoy great food in a warm and welcoming atmosphere. With a menu inspired by both local and
                        international flavors, we strive to make every dish a celebration of the culinary arts.
                    </p>
                    <p className="text-xl text-black text-opacity-70">
                        We believe in the power of food to bring people together, and our team is dedicated to ensuring
                        that every meal is an unforgettable experience. Join us, and become a part of our story.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
