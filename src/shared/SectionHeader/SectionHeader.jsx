import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="text-center py-10 mt-5">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-lg text-gray-500">{subtitle}</p>
            <div className="flex justify-center mt-5">
                <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>
        </div>
    );
}

export default SectionHeader;
