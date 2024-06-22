import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'

const Signup = () => {
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { emailPasswordSignUp, googleLogin, githubLogin, isLoading, updateUserProfile } = useAuth()
    const navigate = useNavigate();

    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const photo = data.photo;

        emailPasswordSignUp(email, password)
            .then(data => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration Successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
                updateUserProfile(name,photo)
                    .then(data =>
                        navigate("/")
                    )
            })
            .catch(error => setError(error.message))

        reset();
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(data => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration Successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(data => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration Successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
    }
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 rounded-xl font-poppins">
                <div className="w-full max-w-screen-xl flex p-8">
                    <div className="w-1/2 p-8 flex justify-center flex-col">
                        <h1 className="text-3xl font-bold mb-4">Get Your Account Now</h1>
                        <p className="text-lg text-gray-700">
                            Sign up to get access to our amazing platform. Start learning or teaching today!
                        </p>
                    </div>
                    <div className="w-1/2 p-8">
                        <div className="w-full max-w-md bg-white rounded-xl shadow-md pt-8">
                            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        {...register('name', { required: 'Name is required' })}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="input input-bordered w-full"
                                        {...register('email', { required: 'Email is required' })}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="input input-bordered w-full"
                                        {...register('password', {
                                            required: 'Password is required', validate: {
                                                hasUpperCase: value =>
                                                    /[A-Z]/.test(value) || 'Password must have an uppercase letter',
                                                hasLowerCase: value =>
                                                    /[a-z]/.test(value) || 'Password must have a lowercase letter',
                                                minLength: value =>
                                                    value.length >= 6 || 'Password must be at least 6 characters long'
                                            }
                                        })}
                                    />
                                    {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        {...register('photo', { required: 'Photo URL is required' })}
                                    />
                                    {errors.photo && <p className="text-red-500 text-xs">{errors.photo.message}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary w-full">Sign Up</button>
                                </div>
                            </form>
                            <div className="flex flex-col justify-center items-center space-x-4">
                                <p className='uppercase'>Or get account by</p>
                                <div className='flex-row justify-center mt-3'>
                                    <button onClick={handleGoogleLogin} className="text-gray-700 hover:text-gray-900 mr-2">
                                        <AiFillGoogleCircle className="w-7 h-7" />
                                    </button>
                                    <button onClick={handleGithubLogin} className="text-gray-700 hover:text-gray-900">
                                        <AiFillGithub className="w-7 h-7" />
                                    </button>
                                </div>
                            </div>
                            <div className='divider'></div>
                            <div className='flex items-center justify-center pb-5'>
                                <p>Already Have Account? <Link className='text-blue-800 font-bold'>Login</Link></p>
                            </div>
                            {error && <p className='text-red-800 text-center pb-5'>{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup