import React from 'react';

import { Plane } from 'lucide-react';


const TripProgressCard = () => {
  const totalTrips = 1200;
  const done = 620;
  const booked = 465;
  const canceled = 115;

  const donePercentage = (done / totalTrips) * 100;
  const bookedPercentage = (booked / totalTrips) * 100;
  const canceledPercentage = (canceled / totalTrips) * 100;

  return (
    <div className="flex bg-white rounded-2xl shadow-md p-4 w-full border border-solid border-gray-400/50 ">
      <div className="flex items-center   w-1/2 ">
        <Plane className="mr-2 text-sky-300 bg-sky-100/100 w-14 h-14 p-4 rounded-lg" />
        <div className='pl-2'>
          <h3 className="text-gray-600">Total Trips</h3>
          <h1 className="text-3xl font-bold">{totalTrips}</h1>
        </div>
      </div>
        <div className='flex  w-full flex-col'>
            <div className="flex  w-full rounded-full mb-4 h-auto">
                <div className="bg-blue-300 h-4 rounded-l-sm" style={{ width: `${donePercentage}%` }}></div>
                <div className="bg-blue-400 h-4" style={{ width: `${bookedPercentage}%` }}></div>
                <div className="bg-blue-600 h-4 rounded-r-sm" style={{ width: `${canceledPercentage}%` }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
                <div className="flex items-center">
                <span className="bg-blue-300 w-3 h-3 rounded-full inline-block mr-1"></span> Done {done}
                </div>
                <div className="flex items-center">
                <span className="bg-blue-400 w-3 h-3 rounded-full inline-block mr-1"></span> Booked {booked}
                </div>
                <div className="flex items-center">
                <span className="bg-blue-600 w-3 h-3 rounded-full inline-block mr-1"></span> Canceled {canceled}
                </div>
            </div>
        </div>
    </div>
  );
};

export default TripProgressCard;
