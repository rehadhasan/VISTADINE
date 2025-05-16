import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center mt-8">
            {pages.map(page => (
                <button
                    key={page}
                    className={`mx-1 px-3 py-1 rounded-md ${currentPage === page ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
