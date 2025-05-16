import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { FaBriefcase } from 'react-icons/fa';
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const JobCard = ({ jobID, title, deadline, education, experience, category }) => {
    return (
        <Link to={`/career/details/${jobID}`}>
            <div className="p-4 mb-4 bg-black bg-opacity-5 rounded shadow">
                <h3 className="text-base md:text-lg font-semibold text-primary mb-2 block">
                    {title}
                </h3>
                <div className="text-black">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
                        <FaCalendarAlt className="text-primary mr-2" />
                        <div>
                            <span className="font-semibold">Deadline: </span>
                            <span>{deadline}</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
                        <MdSchool className="text-primary mr-2" />
                        <div>
                            <span className="font-semibold">Educational Experience: </span>
                            <span>{education}</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <FaBriefcase className="text-primary mr-2" />
                        <div>
                            <span className="font-semibold">Work Experience: </span>
                            <span>{experience}</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="text-xs md:text-sm text-black text-opacity-50">Category: {category}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default JobCard;
