import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = () => {
  const { country } = useParams();
  const [touristSpots, setTouristSpots] = useState([]);
  const capitalizedCountry = country[0].toUpperCase() + country.substring(1);

  useEffect(() => {
    fetch(`http://localhost:5000/country-spots/${country}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch tourist spots');
        }
        return res.json();
      })
      .then(data => {
        setTouristSpots(data);
      })
      .catch(error => {
        console.error('Error fetching tourist spots:', error);
      });
  }, [country]);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">{capitalizedCountry} Tourist Spots</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {touristSpots.map(spot => (
          <div key={spot._id} className="bg-white rounded-xl shadow-md p-6">
            <img src={spot.image} alt="" />
            <h2 className="text-2xl font-bold mt-3">{spot?.tourist_spot_name}</h2>
            <p className="text-gray-600 mb-2">{spot.location}</p>
            <p className="mb-4">{spot.short_description}</p>
            <p className="text-gray-700 mb-2">Average Cost: <span className='font-bold'>{spot.average_cost}</span></p>
            <p className="text-gray-700 mb-2">Seasonality: <span className='font-bold'>{spot.seasonality}</span></p>
            <Link to={`/tourist-spot/${spot._id}`} className="btn btn-primary">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryDetails;
