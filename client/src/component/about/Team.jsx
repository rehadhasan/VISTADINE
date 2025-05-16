import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import TeamSectionSkeleton from "../../skeleton/home/TeamSectionSkeleton.jsx";
import TeamStore from "../../store/TeamStore.js";

const Team = () => {
    const {TeamList} = TeamStore()
    const [loading, setLoading] = useState(true); // State to track loading

    useEffect(() => {
        // Simulate a data fetch or loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); // Adjust time as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="bg-white">
            <div className="container mx-auto px-3 py-16">
                {TeamList === null || loading ? (
                    <TeamSectionSkeleton /> // Display skeleton loader while loading
                ) : (
                    <>
                        <div className="text-center mb-10">
                            <h2 className="text-base text-black text-opacity-50 font-semibold tracking-wide uppercase">Our Team</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black text-90 sm:text-4xl">
                                Our Expert Members
                            </p>
                        </div>
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {TeamList.map((member, index) => (
                                <div key={index} className="relative group">
                                    <div className='h-80 w-full object-cover'>
                                        <img className="w-full h-full rounded-md"
                                             src={member.image}
                                             alt={member.name}
                                        />
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h3 className="text-xl font-bold text-black text-opacity-90">{member.name}</h3>
                                        <p className="mt-1 text-black text-opacity-50">{member.designation}</p>
                                    </div>
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-md transition-opacity">
                                        <div className="flex items-center text-white space-x-4">
                                            <a target='_blank' href={`https://www.linkedin.com/in/${member.linkedin}`}
                                               className="text-2xl">
                                                <FaLinkedinIn size={24} className='hover:text-primary'/>
                                            </a>
                                            <a target='_blank' href={`https://www.facebook.com/${member.facebook}`}
                                               className="text-2xl">
                                                <FaFacebookF size={24} className='hover:text-primary'/>
                                            </a>
                                            <a target='_blank' href={`https://www.twitter.com/${member.twitter}`}
                                               className="text-2xl">
                                                <FaXTwitter size={24} className='hover:text-primary'/>
                                            </a>
                                            <a target='_blank' href={`https://www.instagram.com/${member.instagram}`}
                                               className="text-2xl">
                                                <FaInstagram size={24} className='hover:text-primary'/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Team;
