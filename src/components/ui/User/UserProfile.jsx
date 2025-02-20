import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

const UserProfile = () => {
    return (
        <div className="flex items-center space-x-4">
            <div className="relative p-2 bg-gray-100 rounded-xl">
                <Bell className="w-6 h-6 text-black" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </div>

            <img
                src="/img/participante.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-lg object-cover"
            />

            <div>
                <h3 className="text-sm font-semibold text-black">Ruben Herwitz</h3>
                <p className="text-xs text-gray-500">Admin</p>
            </div>

            <ChevronDown className="w-5 h-5 text-gray-500" />
        </div>
    );
};

export default UserProfile;
