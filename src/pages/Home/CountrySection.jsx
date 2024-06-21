import React from 'react';
import { Link } from 'react-router-dom';

const countries = [
    { name: 'Bangladesh', color: 'bg-blue-500' },
    { name: 'Thailand', color: 'bg-red-500' },
    { name: 'Malaysia', color: 'bg-green-500' },
    { name: 'Vietnam', color: 'bg-yellow-500' },
    { name: 'Cambodia', color: 'bg-indigo-500' },
    { name: 'Indonesia', color: 'bg-purple-500' }
];

const CountryCards = () => {
    return (
        <div className="container mx-auto p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {countries.map(country => (
                    <Link key={country.name} to={`/country-details/${country.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <div className={`text-white p-6 rounded-xl shadow-lg ${country.color} flex justify-center items-center`}>
                            <h2 className="text-2xl font-bold mb-2">{country.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CountryCards;
