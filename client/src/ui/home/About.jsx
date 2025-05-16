import React from 'react';
import aboutSignature from "../../assets/img/about-signature.png"
import aboutCelebration from "../../assets/img/about-celebration.png"

const About = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between p-8 bg-white">
            <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-4 text-black">Our Cafe 20 years working experience.</h2>
                <p className="text-black text-opacity-70 mb-6">
                    Welcome to The Super Restaurant, where culinary excellence meets a warm, inviting atmosphere. Our expertly crafted menu features fresh, locally sourced ingredients that promise to delight your taste buds. Join us for an unforgettable dining experience!
                </p>
                <img src={`${aboutSignature}`} alt="Signature" className="h-16"/>
            </div>
            <div className="lg:w-1/2 flex justify-center">
                <img src={`${aboutCelebration}`} alt="Celebration" className="w-full h-auto object-cover rounded-lg" />
            </div>
        </section>
    );
};

export default About;
