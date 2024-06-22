import React from 'react';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-primary">404</h1>
                <p className="text-2xl md:text-3xl font-medium mt-4">Oops! Page not found.</p>
                <p className="text-gray-600 mt-2 mb-6">Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="btn btn-primary btn-lg">Go Back Home</Link>
            </div>
        </div>
    );
}

export default NotFound404;