import React from 'react'


const Card = ({icon,title, cantidad, porcentaje}) => {
  return (
    <div className='flex flex-row w-1/3 justify-around items-center bg-sky-100 rounded-lg h-24' >
      <div className='bg-white rounded-lg w-15 h-15 flex justify-center items-center'>
        {icon}
      </div>
      <div className='w-1/2 text-start h-full flex flex-col justify-center'>
        <h4 className='text-gray-400 font-medium'>{title}</h4>
        <strong className='text-3xl pt-2'>{cantidad}</strong>
      </div>
      <div className='flex h-full items-end '>
        <p className='text-end bg-white rounded-lg px-1 mb-3 text-gray-400 font-bold'>{porcentaje}</p>
      </div>
    </div>
  )
}

export default Card
