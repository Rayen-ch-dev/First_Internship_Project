import React from 'react'
import { UserPlus, LogOut } from 'lucide-react';
const adminBotton = () => {
  return (
    <button className="bg-red-600 flex hover:bg-red-700 text-white font-bold ml-2 py-2 px-4 rounded sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/5">
    <LogOut className="w-5 h-5" /> <span className='hidden sm:flex sm:text-sm '>Log Out</span>
  </button>
  )
}

export default adminBotton
