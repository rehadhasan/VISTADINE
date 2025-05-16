import React, { useState, useEffect } from 'react';
import PhoneService from "../../ui/home/PhoneService.jsx";
import VideoSection from "../../ui/home/VideoSection.jsx";
import About from "../../ui/home/About.jsx";
import AboutUsSkeleton from "../../skeleton/home/AboutUsSkeleton.jsx";

const AboutUs = () => {
    const [isLoading, setIsLoading] = useState(true); // New state for loading

    useEffect(() => {
        // Simulate a 1-second loading delay
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(loadingTimeout); // Cleanup the timeout on unmount
    }, []);

    return (
        <section className=''>
            <div className='container mx-auto'>
                {isLoading ? (
                    <AboutUsSkeleton /> // Display skeleton loader while loading
                ) : (
                    <>
                        <PhoneService />
                        <VideoSection />
                        <About />
                    </>
                )}
            </div>
        </section>
    );
};

export default AboutUs;
