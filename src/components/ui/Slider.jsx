import React from 'react';
import {
    LayoutDashboard,
    History,
    ClipboardList,
    UserRoundPlus,
    CircleChevronRight,
    CircleChevronLeft,
    PackagePlus
} from "lucide-react";
import { NavLink } from 'react-router-dom';

export const Slider = ({ isCollapsed, setIsCollapsed }) => {
    const activeClass = "bg-cyan-500 text-white";
    const inactiveClass = "hover:bg-gray-200 text-gray-600";

    
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`bg-white shadow-lg h-screen fixed flex flex-col items-center transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
            
            <div className="flex items-center justify-around pt-6 pr-2">
                <div className="flex items-start space-x-1">
                    {/* <Building2 className='text-gray-500 mr-2'/> */}
                    {!isCollapsed && <h2 className="text-xl font-medium pr-8">New Project</h2>}
                </div>
                <button onClick={toggleCollapse} className="text-gray-600 flex items-center pl-2 rounded-lg font-medium">
                    {isCollapsed ? <CircleChevronRight className='hover:text-sky-400 cursor-pointer' /> : <CircleChevronLeft className='text-sky-400 hover:text-gray-500 cursor-pointer' />}
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
                            <LayoutDashboard className="mr-2  ml-2 " />
                            {!isCollapsed && "Dashboard"}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/usuarios"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg font-medium ${isActive ? activeClass : inactiveClass}`
                            }
                        >
                            <UserRoundPlus className="mr-2 ml-2"/>
                            {!isCollapsed && "Registro de Usuarios"}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/beacons"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg font-medium ${isActive ? activeClass : inactiveClass}`
                            }
                        >
                            <PackagePlus className="mr-2 ml-2"/>
                            {!isCollapsed && "Registro de Beacons"}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/asignaciones"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg font-medium ${isActive ? activeClass : inactiveClass}`
                            }
                        >
                            <ClipboardList  className="mr-2 ml-2"  />
                            {!isCollapsed && "Registro de Asignaciones"}
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/historial"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg font-medium ${isActive ? activeClass : inactiveClass}`
                            }
                        >
                            <History  className="mr-2 ml-2" />
                            {!isCollapsed && "Historial"}
                        </NavLink>
                        
                    </li>
                    
                   
                </ul>
            </nav>
        </aside>
    );
};
