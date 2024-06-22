import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Set the initial theme based on local storage or default to light
        const theme = localStorage.getItem('theme') || 'light';
        setIsDarkMode(theme === 'dark');
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

    const handleLogout = () => {
        logout();
    };

    const toggleDarkMode = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const menu = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-tourist-spot">All Tourist Spot</Link></li>
            <li><Link to="/add-tourist-spot">Add Tourist Spot</Link></li>
            <li><Link to="/my-list">My List</Link></li>
            {user ? (
                <li onClick={handleLogout}><Link>Logout</Link></li>
            ) : (
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </>
            )}
        </>
    );

    return (
        <>
            <div className="navbar bg-base-100 font-poppins font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link className="w-20 font-bold text-2xl">ETour</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end flex items-center">
                    {user && (
                        <div className="tooltip tooltip-bottom w-10 rounded-full" data-tip={`${user?.displayName}`}>
                            <img className="w-10 h-10 rounded-full" alt="avatar" src={user.photoURL ? user.photoURL : `https://i.ibb.co/XJdx5xF/blank-profile-picture-973460-960-720.webp`} />
                        </div>
                    )}
                    <button className="ml-4 btn btn-ghost" onClick={toggleDarkMode}>
                        Switch Mode
                        {isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m-6.364-2.364l-.707-.707M18.364 5.636l-.707-.707M21 12h1m-2.364 6.364l-.707-.707M4.636 5.636l-.707-.707M3 12H2m2.364-6.364l-.707-.707M16.95 16.95l-.707-.707M19.071 19.071l-.707-.707M16.95 7.05l-.707-.707M12 21a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 4.618a4.382 4.382 0 110 8.764 4.382 4.382 0 010-8.764z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
