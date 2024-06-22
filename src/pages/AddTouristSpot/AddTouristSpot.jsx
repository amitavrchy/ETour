import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddTouristSpot = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/add-spot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Tourist Spot Added Successfully!",
                showConfirmButton: false,
                timer: 1500
              });
              reset();
              
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Something went wrong",
                showConfirmButton: false,
                timer: 1500
              });
              
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Tourists Spot</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 gap-y-6">
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                Image URL
                            </label>
                            <input
                                id="image"
                                {...register('image', { required: 'Image URL is required' })}
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="tourists_spot_name" className="block text-sm font-medium text-gray-700">
                                Tourist Spot Name
                            </label>
                            <input
                                id="tourists_spot_name"
                                {...register('tourist_spot_name', { required: 'Tourists Spot Name is required' })}
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.tourists_spot_name && <p className="text-red-500 text-xs mt-1">{errors.tourists_spot_name.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="country_name" className="block text-sm font-medium text-gray-700">
                                Country Name
                            </label>
                            <input
                                id="country_name"
                                {...register('country_name', { required: 'Country Name is required' })}
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.country_name && <p className="text-red-500 text-xs mt-1">{errors.country_name.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                Location
                            </label>
                            <input
                                id="location"
                                {...register('location', { required: 'Location is required' })}
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="short_description" className="block text-sm font-medium text-gray-700">
                                Short Description
                            </label>
                            <textarea
                                id="short_description"
                                {...register('short_description', { required: 'Short Description is required' })}
                                rows={3}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.short_description && <p className="text-red-500 text-xs mt-1">{errors.short_description.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="average_cost" className="block text-sm font-medium text-gray-700">
                                Average Cost
                            </label>
                            <input
                                id="average_cost"
                                {...register('average_cost', { required: 'Average Cost is required', min: 0 })}
                                type="number"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.average_cost && <p className="text-red-500 text-xs mt-1">{errors.average_cost.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="seasonality" className="block text-sm font-medium text-gray-700">
                                Seasonality
                            </label>
                            <input
                                id="seasonality"
                                {...register('seasonality')}
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="travel_time" className="block text-sm font-medium text-gray-700">
                                Travel Time
                            </label>
                            <input
                                id="travel_time"
                                {...register('travel_time')}
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="totalVisitorsPerYear" className="block text-sm font-medium text-gray-700">
                                Total Visitors Per Year
                            </label>
                            <input
                                id="totalVisitorsPerYear"
                                {...register('totalVisitorsPerYear')}
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
                                User Email
                            </label>
                            <input
                                id="user_email"
                                {...register('user_email', { required: 'User Email is required' })}
                                type="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.user_email && <p className="text-red-500 text-xs mt-1">{errors.user_email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
                                User Name
                            </label>
                            <input
                                id="user_name"
                                {...register('user_name', { required: 'User Name is required' })}
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.user_name && <p className="text-red-500 text-xs mt-1">{errors.user_name.message}</p>}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddTouristSpot;
