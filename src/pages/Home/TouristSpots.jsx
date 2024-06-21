import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TouristSpots = () => {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tourist-spots')
            .then(response => response.json())
            .then(data => setSpots(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container mx-auto p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spots?.map(spot => (
                    <div key={spot._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={spot.image} alt={spot.tourist_spot_name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{spot.tourist_spot_name}</h2>
                            <p>{spot.short_description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/tourist-spot/${spot._id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TouristSpots;
