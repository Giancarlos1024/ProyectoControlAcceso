import React from 'react';
import { FaRegClock } from 'react-icons/fa';

const travelPackages = [
  {
    title: 'Cultural Exploration',
    location: 'Seoul, South Korea',
    duration: '10 Days / 9 Nights',
    price: '$2,100',
    image: '/img/korea.jpg',
  },
  {
    title: 'Venice Dreams',
    location: 'Venice, Italy',
    duration: '6 Days / 5 Nights',
    price: '$1,500',
    image: '/img/italy.webp',
  },
  {
    title: 'Safari Adventure',
    location: 'Serengeti, Tanzania',
    duration: '8 Days / 7 Nights',
    price: '$3,200',
    image: '/img/tanzania.webp',
  }
];

const TravelPackages = () => {
  return (
    <div className=" rounded-lg ">
      <div className="flex justify-between items-center my-6 ">
        <h2 className="text-2xl font-bold">Travel Packages</h2>
        <div className="flex items-center space-x-2">
          <span className="text-gray-500">Sort by:</span>
          <select className="border rounded-lg px-2 py-2 border-gray-400">
            <option>Latest</option>
            <option>Popular</option>
            <option>Price</option>
          </select>
          <button className="border rounded-lg px-4 py-2 border-gray-400">View All</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-blue-50 w-full p-5 rounded-lg">
        {travelPackages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 bg-white text-blue-600 text-sm font-semibold rounded-md px-2 py-1">
                {pkg.title}
              </span>
            </div>
            <div className="p-4 ">
              <h3 className="text-xl font-bold">{pkg.location}</h3>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <FaRegClock className="mr-1" />
                {pkg.duration}
              </div>
              <div className=' flex items-center '>
                <div className='w-1/2'>
                  <div className="text-blue-600 text-2xl font-bold mt-2">{pkg.price}</div>
                  <div className="text-gray-500 text-sm">per person</div>
                </div>
                  <button className="cursor-pointer mt-4 w-1/2 bg-sky-400 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300">
                    See Detail
                  </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPackages;
