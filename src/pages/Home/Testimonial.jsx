import React from 'react';

const testimonials = [
    {
        text: "Amazing experience! Loved every moment. The service was top-notch and the locations were breathtaking.",
        author: "John Doe",
        avatar: "https://i.ibb.co/qpk7799/mike-tyson.webp"
    },
    {
        text: "Great service and beautiful locations! It was a pleasure traveling with your company.",
        author: "Jane Smith",
        avatar: "https://i.ibb.co/wsWCvhD/a1801332551-65.jpg"
    },
    {
        text: "The best travel agency I've ever used. Their attention to detail and customer service are unparalleled.",
        author: "Michael Brown",
        avatar: "https://i.ibb.co/LY4zTrL/pexels-justin-shaifer-501272-1222271.jpg"
    }
];

const Testimonial = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="p-6">
                                <p className="text-gray-700 text-lg mb-4">{testimonial.text}</p>
                                <div className="flex items-center">
                                    <img src={testimonial.avatar} alt={testimonial.author} className="w-10 h-10 rounded-full mr-4" />
                                    <div>
                                        <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                                        <p className="text-gray-600">Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
