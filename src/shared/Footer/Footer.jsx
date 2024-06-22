import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Footer = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="text-center lg:text-left col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                            <li><Link to="/all-tourist" className="hover:text-gray-300">All Tourist Spots</Link></li>
                            <li><Link to="/add-tourist" className="hover:text-gray-300">Add Tourist Spot</Link></li>
                            <li><Link to="/list" className="hover:text-gray-300">My List</Link></li>
                        </ul>
                    </div>
                    <div className="text-center lg:text-left col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="text-center lg:text-left col-span-2 sm:col-span-1 lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <p className="mb-4">Follow us on social media for updates and more.</p>
                        <div className="flex space-x-4 justify-center items-center lg:items-start lg:justify-start">
                            <a href="#" className="text-gray-300 hover:text-gray-100">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 17h-7c-1.37 0-2.5-1.13-2.5-2.5v-7C6 8.13 7.13 7 8.5 7h7c1.37 0 2.5 1.13 2.5 2.5v7c0 1.37-1.13 2.5-2.5 2.5zm-3.5-5.5c1.38 0 2.5-1.12 2.5-2.5S13.88 9 12.5 9 10 10.12 10 11.5s1.12 2.5 2.5 2.5zm3-5.5H8.5v7h7v-7z"></path></svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-100">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2H7C5.9 2 5.01 2.9 5.01 4L5 20c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z"></path></svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-gray-100">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2H7C5.9 2 5.01 2.9 5.01 4L5 20c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-800 my-8" />
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; 2024 Your Company. All rights reserved.</p>
                    </div>
                    <ul className="flex space-x-4">
                        <li><Link to="/privacy-policy" className="text-gray-300 hover:text-gray-100">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="text-gray-300 hover:text-gray-100">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
