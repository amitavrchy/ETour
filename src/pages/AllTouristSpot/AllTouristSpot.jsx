import React, { useEffect, useState } from 'react'
import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import { Link } from 'react-router-dom';

const AllTouristSpot = () => {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tourist-spots')
            .then(response => response.json())
            .then(data => setSpots(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <>
            <SectionHeader title="All Tourist Spots"></SectionHeader>
            <div className="container mx-auto p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {spots?.map(spot => (
                        <div key={spot._id} className="card bg-base-100 shadow-xl">
                            <figure><img src={spot.image} alt={spot.tourist_spot_name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{spot.tourist_spot_name}</h2>
                                <p>{spot.short_description}</p>
                                <div className='grid grid-cols-1 lg:grid-cols-2'>
                                    <p>Average Cost: {spot.average_cost} </p>
                                    <p>Total Visitors Per Year: {spot.totalVisitorsPerYear}</p>
                                    <p>Travel Time: <br /> {spot.travel_time}</p>
                                    <p>Seasonality: {spot.seasonality}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <Link to={`/tourist-spot/${spot._id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllTouristSpot