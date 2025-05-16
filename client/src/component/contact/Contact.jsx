import React, { useState, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { MdCall, MdOutlineMail } from 'react-icons/md';
import { IoLocationOutline } from "react-icons/io5";
import ContactSkeleton from "../../skeleton/contact/ContactSkeleton.jsx";
import ContactStore from "../../store/ContactStore.js";
import toast from "react-hot-toast";

const Contact = () => {
    const {SaveContactRequest} = ContactStore()
    // State for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        agree: false
    });
    const [loading, setLoading] = useState(true);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Handle form submission
    const handleSubmit = async () =>{
        if(!formData.name || !formData.email || !formData.subject || !formData.message || !formData.agree) {
            toast.error("Input field is required");
        }else{
            let res = await SaveContactRequest(formData)
            if(res){
                toast.success("thanks, We will reply soon !")
            }else{
                toast.error("Something went wrong !")
            }
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500); // Simulate a 2-second loading time
    }, []);

    if (loading) return <ContactSkeleton />;

    return (
        <div className="bg-bg-secondary">
            <div className="max-w-6xl mx-auto px-3 py-16">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/3 bg-white shadow-lg p-8 rounded-lg mb-8 lg:mb-0">
                        <h2 className="text-2xl font-bold mb-6 text-black">Leave A Reply</h2>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="p-4 bg-white text-black border border-primary outline-none focus:outline-none rounded-lg"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="p-4 bg-white text-black border border-primary outline-none focus:outline-none rounded-lg"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="w-full p-4 bg-white text-black border border-primary outline-none focus:outline-none rounded-lg mb-4"
                                value={formData.subject}
                                onChange={handleInputChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Write a message..."
                                className="w-full p-4 bg-white text-black border border-primary outline-none focus:outline-none rounded-lg"
                                rows="5"
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    id="not-a-robot"
                                    name="agree"
                                    className="mr-2"
                                    checked={formData.agree}
                                    onChange={handleInputChange}
                                />
                                <label className="text-black">
                                    I agree to <Link className='text-primary underline' to='/terms-condition'>terms & condition</Link>
                                </label>
                            </div>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className={`bg-black text-white px-6 py-3 rounded-lg flex items-center ${!formData.agree && 'opacity-50 cursor-not-allowed'}`}
                                disabled={!formData.agree}
                            >
                                Submit Now <FiSend className="ml-2" />
                            </button>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <aside className="lg:w-1/3 lg:ml-8">
                        <div className="bg-white shadow-lg p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-6 text-black">CONTACT INFO</h3>
                            <p className='text-black text-opacity-70'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul className="mt-4 space-y-4 text-black text-opacity-70">
                                <li className='flex items-center gap-3'>
                                    <IoLocationOutline size={30} className="inline-block text-primary text-opacity-50" />
                                    <div className='flex flex-col'>
                                        <p>Pabna, Rajshahi, Bangladesh (6650)</p>
                                        <p>Dhaka, bangladesh (1200)</p>
                                    </div>
                                </li>
                            </ul>
                            <ul className="mt-4 space-y-2 text-black text-opacity-70">
                                <li className='flex items-center gap-3'>
                                    <MdOutlineMail size={30} className="inline-block text-primary text-opacity-50"/>
                                    <div className='flex flex-col'>
                                        <p>engr.rehad@gmail.com</p>
                                        <p>engr.rehad@gmail.com</p>
                                        <p>engr.rehad@gmail.com</p>
                                    </div>
                                </li>
                            </ul>
                            <ul className="mt-4 space-y-2 text-black">
                                <li className='flex items-center gap-3'>
                                    <MdCall size={30} className="inline-block text-primary text-opacity-50"/>
                                    <div className='flex flex-col'>
                                        <p>+880 1321774599</p>
                                        <p>+880 1321774599</p>
                                        <p>+880 1321774599</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Contact;
