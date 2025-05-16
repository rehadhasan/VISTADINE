import React from 'react';

const LoadingButton = (props) => {
    return (
        <button className="w-full bg-primary bg-opacity-90 text-white py-2 rounded-lg hover:bg-primary flex items-center justify-center gap-2">
            <span>{props.title}</span>
            <span className="loading loading-spinner loading-sm"></span>
        </button>
    );
};

export default LoadingButton;