import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaCcVisa,
    FaCcMastercard,
    FaCcPaypal,
    FaCcAmazonPay
} from 'react-icons/fa';
import { SiMastercard, SiVisa, SiPaypal, SiAmericanexpress, SiEbay, SiBitcoin } from 'react-icons/si';
import {IoIosSend} from "react-icons/io";
import {useRef} from "react";
import toast from "react-hot-toast";

const AppFooter = () => {
    const emailRef = useRef();

    const handleSubscribe = () => {
        let email = emailRef.current.value;
        console.log(email)
        if(email.length !== 0){
            toast.success("Thank you for subscribe !")
        }else{
            toast.error("Email address is required !")
        }
    }
    return (
        <footer className="bg-black py-8">
            <div className="container mx-auto px-3">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold text-white">Opening Time</h3>
                        <p className='text-white'>Mon to Friday 9Am - 11 Pm</p>
                        <p className="mt-4 text-white">
                            We are an award-winning multinational Company. We Believe quality and standard worldwide
                            Consider.
                        </p>
                        <div className="flex mt-4 space-x-4 text-white">
                            <a href='#'><FaFacebookF size={24}/></a>
                            <a href='#'><FaTwitter size={24}/></a>
                            <a href='#'><FaLinkedinIn size={24}/></a>
                            <a href='#'><FaInstagram size={24}/></a>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0 text-center">
                        <h3 className="text-lg font-semibold text-white">The Super Restaurant</h3>
                        <div className="flex items-center justify-center text-white mt-4 space-x-4">
                            <FaCcVisa className="text-4xl hover:text-blue-700 transition duration-300 ease-in-out"/>
                            <FaCcMastercard
                                className="text-4xl hover:text-red-500 transition duration-300 ease-in-out"/>
                            <FaCcPaypal className="text-4xl hover:text-blue-700 transition duration-300 ease-in-out"/>
                            <FaCcAmazonPay
                                className="text-4xl hover:text-yellow-600 transition duration-300 ease-in-out"/>
                        </div>
                    </div>
                    <div className="text-start">
                        <h3 className="text-lg font-semibold text-white">Subscribe Here</h3>
                        <div className="mt-4 join">
                            <input ref={emailRef} type="email" placeholder="Enter Your Email"
                                   className="join-item p-2 bg-white text-black border border-primary rounded outline-none focus:outline-none"/>
                            <button onClick={handleSubscribe}
                                    className="join-item bg-primary py-2 px-4 rounded-r-lg text-white">
                            <IoIosSend  size={18}/>
                            </button>
                        </div>
                        <ul className="mt-4 flex flex-col items-start space-y-2 text-white">
                            <li>+ <a href='/about'>About Us</a></li>
                            <li>+ <a href='/gallery'>Gallery</a></li>
                            <li>+ <a href='/blog'>Blog</a></li>
                            <li>+ <a href='/faq'>Faq</a></li>
                            <li>+ <a href='/contact'>Contact</a></li>
                            <li>+ <a href='/terms-and-conditions'>Terms & Conditions</a></li>
                            <li>+ <a href='/privacy-policy'>Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-white text-opacity-50">
                <p>&copy; 2023. All rights reserved by The Super Restaurant.</p>
            </div>
        </footer>
    );
};

export default AppFooter;
