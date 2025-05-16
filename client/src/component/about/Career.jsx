import React, { useState, useEffect } from 'react';
import JobCard from '../../ui/about/JobCard.jsx';
import Sidebar from '../../ui/about/Sidebar.jsx';
import CareerSkeleton from '../../skeleton/about/CareerSkeleton.jsx';
import CareerStore from "../../store/CareerStore.js"; // Create a CareerSkeleton component

function Career() {
    const {JobList,JobCategoryList,JobCount,JobListByCategoryRequest,JobListRequest,JobListBySearchRequest} = CareerStore()
    const [isLoading, setIsLoading] = useState(true);

    // Simulate fetching jobs with a loading effect
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500); // Adjust the timeout as needed
    }, []);

    return (
        <div className="bg-white flex flex-wrap md:flex-nowrap max-w-6xl mx-auto p-6 gap-6">
            <div className="w-full md:w-2/3">
                {isLoading || JobList === null ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <CareerSkeleton key={index} />
                    ))
                ) : (
                    JobList.length > 0 ? (
                        JobList.map((job, index) => (
                            <JobCard
                                key={index}
                                jobID={job._id}
                                title={job.title}
                                deadline={job.deadline}
                                education={job.education}
                                experience={job.experience}
                                category={job['category'].categoryName}
                            />
                        ))
                    ) : (
                        <p className="text-black text-opacity-70">No jobs found.</p>
                    )
                )}
            </div>
            <div className="w-full md:w-1/3">
                <Sidebar
                    JobCategoryList={JobCategoryList}
                    JobCount={JobCount}
                    JobListByCategoryRequest={JobListByCategoryRequest}
                    JobListRequest={JobListRequest}
                    JobListBySearchRequest={JobListBySearchRequest}
                />
            </div>
        </div>
    );
}

export default Career;
