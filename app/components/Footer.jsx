import React from 'react';
import { assets } from '@/assets/assets';
import Image from "next/image"

const Footer = () => {
  return (
    <footer>
      <div className='flex lg:ml-20 flex-col md:flex-row items-start justify-center px-16 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500'>
        <div className="w-4/5">
          <Image
            className='w-28 md:w-32'
            src={assets.logo}
            alt='logo'
          />
          <p className="mt-6 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro inventore eligendi rerum est ut, quasi dolor atque officia ab optio veritatis illum. Dolore maiores facere earum, sit tempore, aliquam quis esse deleniti veritatis officia, recusandae id! Accusamus, sequi eius. Consequuntur delectus 
          </p>
        
        </div>

        <div className="w-12 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:underline transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition">
                  Privacy Policy
                </a>
              </li>
            </ul>

          </div>

        </div>
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>000-000-000</p>
              <p>contact</p>@chibuzor.com
            </div>
          </div>

        </div>
      
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 
        &copy2025 Chibuzor Onochie. All Rights Reserved.
      </p>
  
    </footer>
  );
};

export default Footer
