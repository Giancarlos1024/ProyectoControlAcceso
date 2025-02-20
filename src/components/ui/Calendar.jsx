import React from 'react';
import { FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import { UpcomingTrips } from './UpcomingTrips';

export const Calendar = () => {
  
  return (
    <div> 
      <div className="rounded-2xl p-4 w-full h-auto border border-solid border-gray-400/50">

        <div className="flex justify-between items-center mb-4 ">
          <select className="text-white text-sm  border-none rounded-lg p-2  bg-sky-500">
            <option>July 2028</option>
            <option>Popular</option>
            <option>Price</option>
          </select>
          <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-gray-700">
              <FiChevronLeft />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 text-center text-gray-500 mb-2">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center mb-4 ">
          {[...Array(31)].map((_, index) => {
            const day = index + 1;
            const isSelected = [12, 19].includes(day);
            const isRange = day >= 12 && day <= 19;
            return (
              <span
                key={index}
                className={`inline-block w-8 h-8 rounded-lg leading-8 cursor-pointer 
                  ${isSelected ? 'bg-sky-500 text-white' : isRange ? 'bg-blue-100 text-blue-500' : 'text-gray-800'}`}
              >
                {day}
              </span>
            );
          })}
        </div>
        <UpcomingTrips />
      </div>

    </div>
  );
};
