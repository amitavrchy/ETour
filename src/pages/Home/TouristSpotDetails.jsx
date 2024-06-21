import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TouristSpotDetails = () => {
    const { id } = useParams();
    const [spot, setSpot] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/tourist-spots/${id}`)
            .then(response => response.json())
            .then(data => setSpot(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!spot) return <div className="container mx-auto p-5">Loading...</div>;

    return (
        <div className="container mx-auto p-5">
            <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
                <img src={spot.image} alt={spot.tourist_spot_name} className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">{spot.tourist_spot_name}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p><strong>Location:</strong> {spot.location}</p>
                            <p><strong>Country:</strong> {spot.country_name}</p>
                            <p><strong>Description:</strong> {spot.short_description}</p>
                        </div>
                        <div>
                            <p><strong>Average Cost:</strong> {spot.average_cost}</p>
                            <p><strong>Seasonality:</strong> {spot.seasonality}</p>
                            <p><strong>Travel Time:</strong> {spot.travel_time}</p>
                            <p><strong>Total Visitors Per Year:</strong> {spot.totalVisitorsPerYear}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TouristSpotDetails;
