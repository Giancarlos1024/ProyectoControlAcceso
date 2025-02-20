import React from 'react';
import {
    Compass,
    SquareCheck,
    LayoutDashboard,
    Images,
    MessageCircleMore,
    MapPin,
    CalendarDays,
    Package2,
    BadgePercent,
    ThumbsUp,
    Backpack,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { NavLink } from 'react-router-dom';

export const Slider = ({ isCollapsed, setIsCollapsed }) => {
    const activeClass = "bg-cyan-500 text-white";
    const inactiveClass = "hover:bg-gray-200 text-gray-600";

    
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`bg-white shadow-lg h-screen fixed transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-2">
                    <MapPin className="text-blue-500" />
                    {!isCollapsed && <h2 className="text-xl font-medium">Travelie</h2>}
                </div>
                <button onClick={toggleCollapse} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                    {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
                </button>
            </div>
            <nav className="mt-5">
                <ul className="space-y-2">
                    <li>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg font-medium ${isActive ? activeClass : inactiveClass}`
                            }
                            end
                        >
                            <LayoutDashboard className="mr-2" />
                            {!isCollapsed && "Dashboard"}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/packages"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg font-medium ${isActive ? activeClass : inactiveClass}`
                            }
                        >
                            <Package2 className="mr-2" />
                            {!isCollapsed && "Packages"}
                        </NavLink>
                    </li>
                    <li className="flex items-center p-3 hover:bg-gray-200 rounded font-medium text-gray-600">
                        <SquareCheck className="mr-2" />
                        {!isCollapsed && "Bookings"}
                    </li>
                    <li className="flex items-center p-3 hover:bg-gray-200 rounded font-medium text-gray-600">
                        <CalendarDays className="mr-2" />
                        {!isCollapsed && "Calendar"}
                    </li>
                    <li className="flex items-center p-3 hover:bg-gray-200 rounded font-medium text-gray-600">
                        <Backpack className="mr-2" />
                        {!isCollapsed && "Travelers"}
                    </li>
                    <li className="flex items-center p-3 hover:bg-gray-200 rounded font-medium text-gray-600">
                        <Compass className="mr-2" />
                        {!isCollapsed && "Guides"}
                    </li>
                    <li className="flex items-center p-3 hover:bg-gray-200 rounded font-medium text-gray-600">
                        <Images className="mr-2" />
                        {!isCollapsed && "Gallery"}
                    </li>
                    <li className="flex items-center p-3 hover:bg-gray-200 rounded font-medium relative text-gray-600">
                        <MessageCircleMore className="mr-2" />
                        {!isCollapsed && "Messages"}
                        <span className="absolute right-2 bg-cyan-500 text-white text-xs rounded-sm w-5 h-5 flex items-center justify-center">7</span>
                    </li>
                    <li className="flex items-center p-3 hover:bg-gray-200 rounded font-medium text-gray-600">
                        <BadgePercent className="mr-2" />
                        {!isCollapsed && "Deals"}
                    </li>
                    <li className="flex items-center p-3 hover:bg-gray-200 rounded font-medium text-gray-600">
                        <ThumbsUp className="mr-2" />
                        {!isCollapsed && "Feedback"}
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
