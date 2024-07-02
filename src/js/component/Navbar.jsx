import React from 'react';

export function Navbar() {
    return (
        <div>  
		<nav className="container mx-auto flex justify-between items-center">
			<div className="logo">Ayurvedic</div>
			<ul className="flex items-center">
				<li className="mr-6"><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
				<li className="mr-6"><a href="#" className="text-gray-700 hover:text-gray-900">About Us</a></li>
				<li className="mr-6"><a href="#" className="text-gray-700 hover:text-gray-900">Services</a></li>
				<li className="mr-6"><a href="#" className="text-gray-700 hover:text-gray-900">Products</a></li>
				<li><a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Us</a></li>
			</ul>
		</nav>
	






        </div>
    );
};