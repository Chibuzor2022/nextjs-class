"use client"

import React from 'react';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { useAppContext } from '../context/AppContext';
import { useClerk, UserButton } from '@clerk/nextjs';
import { CartIcon } from '@/assets/assets';

// import { GoPerson } from "react-icons/fa"

const Navbar = () => {
  const { router, user } = useAppContext();
  // const { isSeller, router, user } = useAppContext();
  // const { openSignIn, signOut } = useClerk();
  const { openSignIn } = useClerk();
  // const { isSignIn } = useUser();
  
  const isSeller = true;
  return (
    <div className='flex  items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-200 text-gray-900'>
      <h1
        onClick={()=>router.push("/")}
        className='text-2xl font-medium'>
        <span className='text-orange-500'>Q</span>
        uickCarta
      </h1>
      <div className='flex items-center gap-4 lg:gap-8 max-md:hidden'>
        <Link href="/" className='hover:text-gray-700 transition'>Home</Link>
        <Link href="/" className='hover:text-gray-700 transition'>Shop</Link>
        <Link href="/" className='hover:text-gray-700 transition'>About Us</Link>
        <Link href="/" className='hover:text-gray-700 transition'>Contact</Link>
    
        
        {isSeller && (
          <button className='text-xs px-4 py-2.5 rounded'>Seller DashBoard
          </button>
        )}
        
        {/* <UserButton/> */}
      </div>

      <div className="flex items-center gap-4">
        <FaSearch />
        {user ? (
          <>
            <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="cart"
                labelIcon={<CartIcon />}
                onClick={()=>router.push("/cart")}              
              />
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Orders"
                labelIcon={<BagIcon />}
                onClick={()=>router.push("/my-orders")}
              />
            </UserButton.MenuItems>
            </UserButton>          
          
          </>
        ):(
      <button
        onClick={openSignIn}
        className='flex items-center gap-2 hover:text-gray-700 transition'>
          {/* <GoPerson /> */}
         Login
       
      </button>
        )}
      </div>
    </div>
 
  );
};

export default Navbar
