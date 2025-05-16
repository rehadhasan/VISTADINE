import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false); // State to control the video play/pause

    // Function to handle play/pause toggle
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative w-full h-64 lg:h-96 mt-3">
            {/* ReactPlayer component to display the video */}
            <ReactPlayer
                url="https://www.youtube.com/watch?v=GlrxcuEDyF8" // Replace with your video URL
                playing={isPlaying} // Control the video play/pause with state
                controls={true} // Optional: Show default player controls
                width="100%" // Full width of the parent container
                height="100%" // Full height of the parent container
                style={{ borderRadius: '8px', overflow: 'hidden' }} // Optional styling
            />

            {/* Play/Pause button */}
            <button
                onClick={handlePlayPause} // Toggle play/pause on button click
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="bg-black bg-opacity-50 p-4 rounded-full">
                    {isPlaying ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 12L6 6V18Z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-6.272 3.58A1 1 0 017 13.58V10.42a1 1 0 011.48-.874l6.272 3.58a1 1 0 010 1.748z"
                            />
                        </svg>
                    )}
                </div>
            </button>
        </div>
    );
};

export default VideoSection;