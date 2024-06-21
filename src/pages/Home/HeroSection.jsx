import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero h-[80vh]" style={{ backgroundImage: `url('https://i.ibb.co/fkHYHwX/Tourist-Spots-scaled.webp')` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Discover Your Next Adventure</h1>
                    <p className="mb-5">Explore the most beautiful places in the world. Experience unforgettable moments and make lasting memories.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
