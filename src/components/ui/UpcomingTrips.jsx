import { FiPlus } from 'react-icons/fi';

import Participantes from './Participantes'
import { CalendarDays } from 'lucide-react';

export const UpcomingTrips = () => {
    const trips = [
        {
            image: "img/paris.jpg",
            title: "Paris, France",
            tag: "Romantic Getaway",
            participants: 9,
            date: "5 - 10 July"
        },
        {
            image: "img/tokyo.jpg",
            title: "Tokyo, Japan",
            tag: "Cultural Exploration",
            participants: 17,
            date: "12 - 19 July"
        },
        {
            image: "img/australia.jpg",
            title: "Sydney, Australia",
            tag: "Adventure Tour",
            participants: 12,
            date: "15 - 24 July"
        },
        {
            image: "img/usa.jpg",
            title: "New York, USA",
            tag: "City Highlights",
            participants: 22,
            date: "20 - 25 July"
        }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-md w-full h-auto">

            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-gray-800">Upcoming Trips</h3>
                <button className="bg-sky-500 text-white p-2 rounded-lg hover:bg-blue-600 shadow-md transition-transform transform hover:scale-105">
                    <FiPlus />
                </button>
            </div>
            <div className="space-y-4">
                {trips.map((trip, index) => (
                    <div 
                        key={index} 
                        className={`flex items-center rounded-xl p-4  hover:shadow-md transition-shadow ${
                            trip.title === "Tokyo, Japan" ? "bg-blue-50" : "bg-transparent"
                        }`}
                    >
                        <img 
                            src={trip.image} 
                            alt={trip.title} 
                            className="w-16 h-16 rounded-lg object-cover mr-4"
                        />
                        <div className="flex-grow">
                            <span className={`bg-blue-100 text-back text-xs px-2 py-1 rounded-md mb-1 inline-block ${
                                trip.title === "Tokyo, Japan" ? "bg-white" : "bg-sky-200"
                            }`}>
                                {trip.tag}
                            </span>
                            <h4 className="font-bold text-gray-800">{trip.title}</h4>
                            <div className="flex items-center text-gray-500 text-sm mt-1">
                                <Participantes />
                                <span className="mr-2">+{trip.participants}</span>
                                <CalendarDays className="mr-2 w-4" />
                                <span className="flex items-center text-xs">
                                    {trip.date}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};
