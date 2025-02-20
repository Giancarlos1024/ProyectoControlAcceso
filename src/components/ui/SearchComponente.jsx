import React from 'react'

import { Search } from 'lucide-react'


export const SearchComponente = () => {
  return (
    <div className=' w-70 flex py-1 rounded-sm relative'>
        <Search className='absolute top-3 left-1' />
        <input 
        type="text" 
        placeholder='Search anything' 
        className=' bg-gray-100 rounded-lg p-2 pl-8 w-full'
        />
    </div>
  )
}
