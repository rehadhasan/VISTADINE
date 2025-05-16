import React, { useState, useEffect } from 'react';
import MapSectionSkeleton from "../../skeleton/home/MapSectionSkeleton.jsx";

const MapSection = () => {
    const [isLoading, setIsLoading] = useState(true); // New state for loading

    useEffect(() => {
        // Simulate a 1-second loading delay
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(loadingTimeout); // Cleanup the timeout on unmount
    }, []);

    return (
        <div className="h-96 w-full">
            {isLoading ? (
                <MapSectionSkeleton /> // Display skeleton loader while loading
            ) : (
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7497571.988099541!2d85.04415333476368!3d23.427118821374123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1738405542253!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            )}
        </div>
    );
};

export default MapSection;
