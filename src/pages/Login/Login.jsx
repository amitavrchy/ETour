import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Signup = () => {
    const location = useLocation();
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signIn, googleLogin, githubLogin } = useAuth()
    const navigate = useNavigate();
    console.log(location.state?.from?.pathname);
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signIn(email, password)
            .then(data => {
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))

        reset();
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(data => {
                navigate('/');
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(data => {
                navigate('/');
            })
    }
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 rounded-xl font-poppins">
                <div className="w-full max-w-screen-xl flex p-8">
                    <div className="w-1/2 p-8 flex justify-center flex-col">
                        <h1 className="text-3xl font-bold mb-4">Login to your account now!</h1>
                        <p className="text-lg text-gray-700">
                            Login to get access to our amazing platform. Resume learning or teaching today!
                        </p>
                    </div>
                    <div className="w-1/2 p-8">
                        <div className="w-full max-w-md bg-white rounded-xl shadow-md pt-8">
                            <h2 className="text-2xl font-bold text-center">Login</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8">
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
                                        {...register('password', { required: 'Password is required' })}
                                    />
                                    {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary w-full">Login</button>
                                </div>
                            </form>
                            <div className="flex flex-col justify-center items-center space-x-4">
                                <p className='uppercase'>Or login by</p>
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
                                <p>Do not Have Account? <Link to="/signup" className='text-blue-800 font-bold'>Sign Up</Link></p>
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