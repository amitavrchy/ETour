import React, { useEffect, useState } from 'react';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import { Link } from 'react-router-dom';

const AllTouristSpot = () => {
    const [spots, setSpots] = useState([]);
    const [sortBy, setSortBy] = useState('asc');
    useEffect(() => {
        fetchTouristSpots();
    }, []);
    const fetchTouristSpots = () => {
        fetch('http://localhost:5000/tourist-spots')
            .then(response => response.json())
            .then(data => {
                const sortedSpots = sortSpots(data);
                setSpots(sortedSpots);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleSort = () => {
        const newSortOrder = sortBy === 'asc' ? 'desc' : 'asc';
        setSortBy(newSortOrder);
        const sortedSpots = sortSpots(spots, newSortOrder);
        setSpots(sortedSpots);
    };
    const sortSpots = (spotsToSort, sortOrder = 'asc') => {
        return spotsToSort.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.average_cost - b.average_cost;
            } else {
                return b.average_cost - a.average_cost;
            }
        });
    };

    return (
        <>
            <SectionHeader title="All Tourist Spots"></SectionHeader>
            <div className="container mx-auto p-5 flex justify-end">
                <div className="relative inline-flex">
                    <select
                        className="form-select"
                        onChange={handleSort}
                        value={sortBy}
                    >
                        <option value="asc">Sort by Price (Low to High)</option>
                        <option value="desc">Sort by Price (High to Low)</option>
                    </select>
                </div>
            </div>
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
    );
}

export default AllTouristSpot;
