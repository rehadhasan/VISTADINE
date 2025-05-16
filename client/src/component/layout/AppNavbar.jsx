import React, {useEffect, useState} from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGlobe, FaShoppingCart } from 'react-icons/fa';
import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {CiClock1} from "react-icons/ci";
import toast, {Toaster} from "react-hot-toast";
import UserStore from "../../store/UserStore.js";
import CartStore from "../../store/CartStore.js";
import logo from '../../assets/img/logo.png'

const AppNavbar = () => {
    const {isLogin} = UserStore()
    const {CartListRequest,CartCount} = CartStore()

    useEffect(() => {
        (async ()=>{
            if(isLogin()){
                await CartListRequest()
            }
        })()
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("English");
    const [openItems, setOpenItems] = useState({ items: false, about: false });

    const [isOpen, setIsOpen] = useState(false);
    const [table, setTable] = useState('Table - 1');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLangDropdown = () => {
        setIsLangOpen(!isLangOpen);
    };

    const handleLangSelect = (lang) => {
        setSelectedLang(lang);
        setIsLangOpen(false);
    };

    const toggleSubMenu = (menu) => {
        setOpenItems((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    const toggleModal = () => setIsOpen(!isOpen);

    const handleCallWaiter = () => {
        // Implement the logic to call the waiter
        console.log(`Waiter called for ${table}`);
        toast.error("This waiter is busy now. Please try again later.")
        toggleModal(); // Close the modal after the action
    };

    return (
        <section className='bg-bg-primary'>
            <div className="container mx-auto px-3 text-white">
                <header className="flex justify-center md:justify-between items-center py-2">
                    {/* Left Section */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="mailto:info@geotechit.com" className="flex items-center space-x-1">
                            <BsFillEnvelopeFill/>
                            <span>engr.rehad@gmail.com</span>
                        </a>
                        <a href="tel:+447891017714" className="flex items-center space-x-1">
                            <BsFillTelephoneFill/>
                            <span>+880 1321774599</span>
                        </a>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        <div className='hidden lg:flex items-center space-x-4'>
                            <a href="#" className="hover:text-primary"><FaFacebookF/></a>
                            <a href="#" className="hover:text-primary"><FaTwitter/></a>
                            <a href="#" className="hover:text-primary"><FaLinkedinIn/></a>
                            <a href="#" className="hover:text-primary"><FaInstagram/></a>
                        </div>
                        <span className='hidden lg:block'>|</span>

                        {/* Language Dropdown */}
                        <div className="relative z-10">
                            <button onClick={toggleLangDropdown}
                                    className="flex items-center space-x-1 hover:text-primary">
                                <FaGlobe/>
                                <span>{selectedLang}</span>
                            </button>
                            {isLangOpen && (
                                <div
                                    className="absolute right-0 mt-2 bg-black text-white border border-gray-700 rounded-md w-32">
                                    <a
                                        href="#"
                                        onClick={() => handleLangSelect("English")}
                                        className="block px-4 py-2 hover:text-primary"
                                    >
                                        English
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => handleLangSelect("Spanish")}
                                        className="block px-4 py-2 hover:text-primary"
                                    >
                                        Spanish
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => handleLangSelect("French")}
                                        className="block px-4 py-2 hover:text-primary"
                                    >
                                        French
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => handleLangSelect("German")}
                                        className="block px-4 py-2 hover:text-primary"
                                    >
                                        German
                                    </a>
                                </div>
                            )}
                        </div>
                        <span>|</span>
                        {
                            isLogin()?(
                                <div className="relative">
                                    <a href="/cart" className="flex items-center hover:text-primary">
                                        <FaShoppingCart size={20}/>
                                        <span className="ml-1">{CartCount}</span>
                                    </a>
                                </div>
                            ): (
                                <div className="relative">
                                    <a href="/login" className="flex items-center hover:text-primary">
                                        <FaShoppingCart size={20}/>
                                        <span className="ml-1">0</span>
                                    </a>
                                </div>
                            )
                        }
                        <span>|</span>
                        {
                            isLogin() ? (
                                <a href="/dashboard" className="text-lg text-bold text-white hover:text-primary">
                                    Dashboard
                                </a>
                            ) : (
                                <a href="/login" className="text-lg text-bold text-white hover:text-primary">
                                Login
                                </a>
                            )
                        }
                    </div>
                </header>

                <nav className="text-white py-2">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                        <div className="flex items-center space-x-4">
                            <img src={logo} alt="Resturent" className=""/>
                        </div>

                        {/* Menu Links */}
                        <div className="hidden lg:flex space-x-8 items-center">
                            <a href="/" className="hover:text-primary">HOME</a>
                            <a href="/menu" className="hover:text-primary">MENU</a>
                            <div className="relative group z-10">
                                <button className="hover:text-primary">ITEMS</button>
                                {/* Dropdown */}
                                <div className="absolute hidden group-hover:block bg-black text-white p-4">
                                    <a href="/items/foods"
                                       className="block hover:text-primary whitespace-nowrap">FOODS</a>
                                    <a href="/cart"
                                       className="block hover:text-primary whitespace-nowrap mt-1">CART</a>
                                    <a href="/checkout"
                                       className="block hover:text-primary whitespace-nowrap mt-1">CHECKOUT</a>
                                </div>
                            </div>
                            <div className="relative group z-10">
                                <button className="hover:text-primary">ABOUT</button>
                                {/* Dropdown */}
                                <div className="absolute hidden group-hover:block bg-black text-white p-4">
                                    <a href="/about"
                                       className="block hover:text-primary whitespace-nowrap">ABOUT US</a>
                                    <a href="/gallery"
                                       className="block hover:text-primary whitespace-nowrap mt-1">GALLERY</a>
                                    <a href="/faq"
                                       className="block hover:text-primary whitespace-nowrap mt-1">FAQ</a>
                                    <a href="/career"
                                       className="block hover:text-primary whitespace-nowrap mt-1">CAREER</a>
                                    <a href="/team"
                                       className="block hover:text-primary whitespace-nowrap mt-1">TEAM</a>
                                    <a href="/reservation"
                                       className="block hover:text-primary whitespace-nowrap mt-1">RESERVATION</a>
                                </div>
                            </div>
                            <a href="/blog" className="hover:text-yellow-500">BLOGS</a>
                            <a href="/contact" className="hover:text-yellow-500">CONTACT</a>
                        </div>

                        <div className='hidden md:flex items-center gap-2 text-white'>
                            <CiClock1 size={30}/>
                            <div className='flex flex-col'>
                                <span className='text-base'>Opening Hour</span>
                                <span className='text-sm'>Mon to Friday 9:00 AM - 11:00 PM</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <a href="/reservation"
                               className="bg-primary text-white px-3 py-1 rounded hover:bg-primary">Reservation</a>
                            <div>
                                <button
                                    onClick={toggleModal}
                                    className="bg-transparent hover:bg-primary text-white px-3 py-1 border border-primary rounded outline-none focus:outline-none"
                                >
                                    Call Waiter
                                </button>

                                {isOpen && (
                                    <div
                                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                                            <div className="flex justify-between items-center mb-4">
                                                <h2 className="text-lg font-semibold text-black">Call Waiter</h2>
                                                <button
                                                    onClick={toggleModal}
                                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                                >
                                                    &#x2715;
                                                </button>
                                            </div>
                                            <hr className='mb-4'/>
                                            <select
                                                value={table}
                                                onChange={(e) => setTable(e.target.value)}
                                                className="w-full p-2 text-black bg-white border border-black rounded mb-4 outline-none focus:outline-none"
                                            >
                                                <option>Table - 1</option>
                                                <option>Table - 2</option>
                                                <option>Table - 3</option>
                                                <option>Table - 4</option>
                                                <option>Table - 5</option>
                                                <option>Table - 6</option>
                                            </select>
                                            <hr className='mb-4'/>
                                            <div className='flex items-center justify-end'>
                                                <button
                                                    onClick={handleCallWaiter}
                                                    className="bg-transparent hover:bg-primary text-primary hover:text-white px-3 py-1 border border-primary rounded outline-none focus:outline-none"
                                                >
                                                    Call Waiter
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={toggleMenu}>
                                {isMenuOpen ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden flex flex-col space-y-2 mt-4">
                            <a href="/" className="hover:text-primary">HOME</a>
                            <a href="/menu" className="hover:text-primary">MENU</a>
                            <div>
                                <button
                                    onClick={() => toggleSubMenu('items')}
                                    className="flex justify-between w-full hover:text-primary"
                                >
                                    ITEMS <span>{openItems.items ? '-' : '+'}</span>
                                </button>
                                {openItems.items && (
                                    <div className="flex flex-col space-y-1 pl-4">
                                        <a href="/items/foods" className="hover:text-primary">FOODS</a>
                                        <a href="/cart" className="hover:text-primary">CART</a>
                                        <a href="/checkout" className="hover:text-primary">CHECKOUT</a>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button
                                    onClick={() => toggleSubMenu('about')}
                                    className="flex justify-between w-full hover:text-primary"
                                >
                                    ABOUT <span>{openItems.about ? '-' : '+'}</span>
                                </button>
                                {openItems.about && (
                                    <div className="flex flex-col space-y-1 pl-4">
                                        <a href="/about" className="hover:text-primary">ABOUT US</a>
                                        <a href="/gallery" className="hover:text-primary">GALLERY</a>
                                        <a href="/faq" className="hover:text-primary">FAQ</a>
                                        <a href="/career" className="hover:text-primary">CAREER</a>
                                        <a href="/team" className="hover:text-primary">TEAM</a>
                                        <a href="/reservation" className="hover:text-primary">RESERVATION</a>
                                    </div>
                                )}
                            </div>
                            <a href="/blog" className="hover:text-primary">BLOGS</a>
                            <a href="/contact" className="hover:text-primary">CONTACT</a>
                            <a href="/reservation"
                               className="bg-primary text-white px-3 py-1 rounded hover:bg-primary">Reservation</a>
                            <div>
                                <button
                                    onClick={toggleModal}
                                    className="w-full bg-transparent hover:bg-primary text-white px-3 py-1 border border-primary rounded outline-none focus:outline-none"
                                >
                                    Call Waiter
                                </button>

                                {isOpen && (
                                    <div
                                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                                            <div className="flex justify-between items-center mb-4">
                                                <h2 className="text-lg font-semibold text-black">Call Waiter</h2>
                                                <button
                                                    onClick={toggleModal}
                                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                                >
                                                    &#x2715;
                                                </button>
                                            </div>
                                            <hr className='mb-4'/>
                                            <select
                                                value={table}
                                                onChange={(e) => setTable(e.target.value)}
                                                className="w-full p-2 text-black bg-white border border-black rounded mb-4 outline-none focus:outline-none"
                                            >
                                                <option>Table - 1</option>
                                                <option>Table - 2</option>
                                                <option>Table - 3</option>
                                                <option>Table - 4</option>
                                                <option>Table - 5</option>
                                                <option>Table - 6</option>
                                            </select>
                                            <hr className='mb-4'/>
                                            <div className='flex items-center justify-end'>
                                                <button
                                                    onClick={handleCallWaiter}
                                                    className="bg-transparent hover:bg-primary text-primary hover:text-white px-3 py-1 border border-primary rounded outline-none focus:outline-none"
                                                >
                                                    Call Waiter
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </nav>
                <Toaster position='bottom-center'/>
            </div>
        </section>
    );
};

export default AppNavbar;
