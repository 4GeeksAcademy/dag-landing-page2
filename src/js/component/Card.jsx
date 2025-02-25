import React from 'react';

export function Card () {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full" src="https://via.placeholder.com/500x325" alt="Card image"/>
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus odio sit amet ipsum fermentum, eu varius libero pulvinar.
        </p>
    </div>
    <div className="px-6 py-4">
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Find Out More</span>

    </div>
</div>
    );
};