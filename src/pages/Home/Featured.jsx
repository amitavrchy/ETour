import React from 'react'

const Featured = () => {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-6">Special Offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {/* Example special offers */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold mb-2">Summer Sale</h3>
                    <p className="text-gray-600 mb-2">Save up to 30% on selected destinations.</p>
                    <button className="btn btn-primary">Shop Now</button>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold mb-2">Winter Getaway</h3>
                    <p className="text-gray-600 mb-2">Escape the cold with our winter offers.</p>
                    <button className="btn btn-primary">Explore</button>
                </div>
                {/* Add more special offer cards as needed */}
            </div>
        </section>
    )
}

export default Featured