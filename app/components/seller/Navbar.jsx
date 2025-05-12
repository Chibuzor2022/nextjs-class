
"use client"
import React from 'react'
import {useAppContext} from "../../context/AppContext"
// import Link from 'next/link';


const Navbar = () => {
  const { router } = useAppContext();
  
  return (
    <div className='flex  items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-200 text-gray-900'>
      <h1
        onClick={()=>router.push("/")}
        className='text-2xl font-medium'>
        <span className='text-orange-500'>Q</span>
        uickCarta
      </h1>
    
      <div className="flex items-center gap-4">
          <button className='flex bg-gray-400 py-2 px-12 text-white rounded  hover:text-gray-900 transition'>
         Logout
        </button>
      </div>
    </div>
 
  );
};

export default Navbar
git