import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddTouristSpot = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Implement your logic to send data to backend here
        console.log(data);
        // Example fetch implementation
        fetch('http://localhost:5000/add-spot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            // Redirect or show success message as needed
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors
        });
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-8">Add Tourists Spot</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
                <div className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register('image', { required: 'Image URL is required' })}
                        />
                        {errors.image && <p className="text-red-500 text-xs">{errors.image.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourists Spot Name</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register('tourists_spot_name', { required: 'Tourists Spot Name is required' })}
                        />
                        {errors.tourists_spot_name && <p className="text-red-500 text-xs">{errors.tourists_spot_name.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register('country_name', { required: 'Country Name is required' })}
                        />
                        {errors.country_name && <p className="text-red-500 text-xs">{errors.country_name.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register('location', { required: 'Location is required' })}
                        />
                        {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            {...register('short_description', { required: 'Short Description is required' })}
                        />
                        {errors.short_description && <p className="text-red-500 text-xs">{errors.short_description.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input
                            type="number"
                            className="input input-bordered w-full"
                            {...register('average_cost', { required: 'Average Cost is required', min: 0 })}
                        />
                        {errors.average_cost && <p className="text-red-500 text-xs">{errors.average_cost.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register('seasonality')}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register('travel_time')}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <input
                            type="number"
                            className="input input-bordered w-full"
                            {...register('totalVisitorsPerYear', { min: 0 })}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            {...register('user_email', { required: 'User Email is required' })}
                        />
                        {errors.user_email && <p className="text-red-500 text-xs">{errors.user_email.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register('user_name', { required: 'User Name is required' })}
                        />
                        {errors.user_name && <p className="text-red-500 text-xs">{errors.user_name.message}</p>}
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddTouristSpot;
