import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
    return (
        <div className="hero h-[80vh]" style={{ backgroundImage: `url('https://i.ibb.co/fkHYHwX/Tourist-Spots-scaled.webp')` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        <Typewriter
                            cursor
                            cursorBlinking
                            cursorColor="rgba(33, 1, 1, 1)"
                            delaySpeed={1000}
                            deleteSpeed={25}
                            loop={0}
                            typeSpeed={75}
                            words={[
                                'Discover Your Next Adventure'
                            ]}
                        />
                    </h1>
                    <p className="mb-5">Explore the most beautiful places in the world. Experience unforgettable moments and make lasting memories.</p>
                    <Link to="/all-tourist-spot"><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
