import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const MyList = () => {
    const { user } = useAuth();
    const [spots, setSpots] = useState([]);
    const [selectedSpot, setSelectedSpot] = useState(null);
    const { register, handleSubmit, reset } = useForm();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['spots', user?.email],
        queryFn: async () => {
            fetch(`http://localhost:5000/spots/${user.email}`)
                .then(response => response.json())
                .then(data => setSpots(data))
                .catch(error => console.error('Error fetching data:', error))
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/spots/${id}`, {
                    method: 'DELETE',
                })
                    .then(response => response.json())
                    .then((data) => {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(error => console.error('Error deleting spot:', error));
            }
        });
    };

    const handleUpdateClick = (spot) => {
        setSelectedSpot(spot);
        reset(spot);
    };

    const handleUpdate = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/spots/${selectedSpot._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(updatedSpot => {
                setSelectedSpot(null);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Edited Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();

            })
            .catch(error => console.error('Error updating spot:', error));
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-6 text-center">My Added Tourist Spots</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spots.map(spot => (
                    <div key={spot._id} className="card bg-base-100 shadow-xl">
                        <figure><img className='h-[250px]' src={spot.image} alt={spot.tourist_spot_name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{spot.tourist_spot_name}</h2>
                            <div className="grid grid-cols-1 gap-2">
                                <p>Location: {spot.location}</p>
                                <p>Average Cost: {spot.average_cost}</p>
                                <p>Seasonality: {spot.seasonality}</p>
                                <p>Travel Time: {spot.travel_time}</p>
                                <p>Total Visitors Per Year: {spot.totalVisitorsPerYear}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-info" onClick={() => handleUpdateClick(spot)}>Update</button>
                                <button className="btn btn-error" onClick={() => handleDelete(spot._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedSpot && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Update Tourist Spot</h3>
                        <form onSubmit={handleSubmit(handleUpdate)}>
                            <div className="form-control">
                                <label className="label">Image URL</label>
                                <input className="input input-bordered" defaultValue={selectedSpot.image} {...register('image')} />
                            </div>
                            <div className="form-control">
                                <label className="label">Tourist Spot Name</label>
                                <input className="input input-bordered" defaultValue={selectedSpot.tourist_spot_name} {...register('tourist_spot_name')} />
                            </div>
                            <div className="form-control">
                                <label className="label">Country Name</label>
                                <input className="input input-bordered" defaultValue={selectedSpot.country_name} {...register('country_name')} />
                            </div>
                            <div className="form-control">
                                <label className="label">Location</label>
                                <input className="input input-bordered" defaultValue={selectedSpot.location} {...register('location')} />
                            </div>
                            <div className="form-control">
                                <label className="label">Short Description</label>
                                <textarea className="textarea textarea-bordered" defaultValue={selectedSpot.short_description} {...register('short_description')} />
                            </div>
                            <div className="form-control">
                                <label className="label">Average Cost</label>
                                <input type="text" className="input input-bordered" defaultValue={selectedSpot.average_cost} {...register('average_cost')} />
                            </div>
                            <div className="form-control">
                                <label className="label">Seasonality</label>
                                <input className="input input-bordered" defaultValue={selectedSpot.seasonality} {...register('seasonality')} />
                            </div>
                            <div className="form-control">
                                <label className="label">Travel Time</label>
                                <input className="input input-bordered" defaultValue={selectedSpot.travel_time} {...register('travel_time')} />
                            </div>
                            <div className="form-control">
                                <label className="label">Total Visitors Per Year</label>
                                <input type="text" className="input input-bordered" defaultValue={selectedSpot.totalVisitorsPerYear} {...register('totalVisitorsPerYear')} />
                            </div>
                            <div className="form-control mt-4 flex justify-end gap-2">
                                <button className="btn btn-info" type="submit">Update</button>
                                <button className="btn btn-error" type="button" onClick={() => setSelectedSpot(null)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyList;
