import React from 'react'

const Featured = () => {
    return (
        <section className="mt-10 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">Discover Your Next Adventure</h2>
                    <p className="text-lg mb-8">Explore unique destinations and create unforgettable memories.</p>
                    <a href="/all-tourist-spot" className="inline-block bg-white text-purple-500 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300">Explore Now</a>
                </div>
            </div>
        </section>
    )
}

export default Featured