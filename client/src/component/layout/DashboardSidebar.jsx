import React, { useState } from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import UserStore from "../../store/UserStore.js";
import Cookies from 'js-cookie';

const DashboardSidebar = (props) => {
    const navigate = useNavigate();
    const {LogoutUserRequest} = UserStore()
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = async () => {
        let res = await LogoutUserRequest()
        if(res){
            localStorage.clear()
            sessionStorage.clear()
            Cookies.remove('token')
            navigate('/')
        }
    }

    return (
        <div className="container mx-auto bg-bg-secondary text-black">
            <div className="flex flex-col md:flex-row">
                {/* Mobile Header with Hamburger Menu */}
                <div className="md:hidden bg-white p-4 shadow-md flex justify-between items-center">
                    <button
                        className="text-black"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                    <h1 className="font-semibold text-lg">Dashboard</h1>
                </div>

                {/* Sidebar */}
                <div
                    className={`${
                        sidebarOpen ? 'block' : 'hidden'
                    } md:block w-full md:w-1/4 bg-white px-4 py-10 shadow-md`}
                >
                    <nav>
                        <ul className="space-y-4">
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({isActive}) =>
                                        `cursor-pointer block p-2 rounded font-semibold ${
                                            isActive
                                                ? 'text-white bg-primary'
                                                : 'text-black hover:text-primary hover:bg-primary hover:bg-opacity-20'
                                        }`
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/orders'
                                    className={({isActive}) =>
                                        `cursor-pointer block p-2 rounded font-semibold ${
                                            isActive
                                                ? 'text-white bg-primary'
                                                : 'text-black hover:text-primary hover:bg-primary hover:bg-opacity-20'
                                        }`
                                    }
                                >
                                    My Orders
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/wish'
                                    className={({isActive}) =>
                                        `cursor-pointer block p-2 rounded font-semibold ${
                                            isActive
                                                ? 'text-white bg-primary'
                                                : 'text-black hover:text-primary hover:bg-primary hover:bg-opacity-20'
                                        }`
                                    }
                                >
                                    WishList
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/setting'
                                    className={({isActive}) =>
                                        `cursor-pointer block p-2 rounded font-semibold ${
                                            isActive
                                                ? 'text-white bg-primary'
                                                : 'text-black hover:text-primary hover:bg-primary hover:bg-opacity-20'
                                        }`
                                    }
                                >
                                    Settings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/profile'
                                    className={({isActive}) =>
                                        `cursor-pointer block p-2 rounded font-semibold ${
                                            isActive
                                                ? 'text-white bg-primary'
                                                : 'text-black hover:text-primary hover:bg-primary hover:bg-opacity-20'
                                        }`
                                    }
                                >
                                    Edit Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={handleLogout}
                                    to=''
                                    className={`cursor-pointer block p-2 rounded text-black font-semibold hover:text-primary hover:bg-primary hover:bg-opacity-20`}>
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                {props.children}
            </div>
        </div>
    );
};

export default DashboardSidebar;
