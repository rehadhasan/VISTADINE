// src/components/JobDetails.js
import React, { useState, useEffect } from 'react';
import JobDetailsSkeleton from "../../skeleton/about/JobDetailsSkeleton.jsx";
import CareerStore from "../../store/CareerStore.js";

const JobDetails = () => {
    const {JobDetails} = CareerStore()
    const [loading, setLoading] = useState(true); // Simulate loading state

    // Simulate data fetching
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500); // 1 seconds
        return () => clearTimeout(timer);
    }, []);

    if (loading || JobDetails === null) {
        return <JobDetailsSkeleton />;
    }

    return (
        <section className="bg-white text-black">
            <div className="max-w-5xl mx-auto px-3 py-16">
                {/* Job Title */}
                <h1 className="text-3xl font-semibold mb-4 text-primary">
                    {JobDetails.title}
                </h1>

                {/* Job Vacancy */}
                <div className="mb-6">
                    <span className="font-semibold">Vacancy: {JobDetails.vacancy}</span> 3
                </div>

                {/* Job Responsibilities */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-primary">Job Responsibilities</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        {
                            JobDetails.jobDes.split(', ').map((item,i)=>{
                                return (
                                    <li key={i}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* Employment Status */}
                <div className="mb-4">
                    <span className="font-semibold">Employment Status:</span> {JobDetails.employStatus}
                </div>

                {/* Job Location */}
                <div className="mb-4">
                    <span className="font-semibold">Job Location:</span> {JobDetails.jobLocation}
                </div>

                {/* Salary */}
                <div className="mb-8">
                    <span className="font-semibold">Salary:</span> {JobDetails.salary}
                </div>

                {/* Email Address */}
                <div className="mt-8">
                    <p>
                        <span className="font-semibold">Email Address:</span> Send your CV to <a href="mailto:engr.rehad@gmail.com" className="text-primary hover:underline">engr.rehad@gmail.com</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;
