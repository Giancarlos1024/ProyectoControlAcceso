import React from 'react'


const Card = ({icon,title, cantidad, porcentaje}) => {
  return (
    <div className='flex flex-col w-1/3 justify-around items-center border-1 border-gray-500 rounded-lg h-30 pt-4' >
      <div className='bg-white rounded-lg w-15 h-20 flex justify-center items-center'>
        {icon}
      </div>
      <div className='w-full text-center h-full flex flex-col justify-center'>
        <h4 className='text-gray-400 font-medium text-sm'>{title}</h4>
        <strong className='text-xl text-sky-300 pt-2'>{cantidad}</strong>
      </div>
    </div>
  )
}

export default Card
