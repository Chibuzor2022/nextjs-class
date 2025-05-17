import React from 'react';
import Image from "next/image"

const products = [
  {
    id: 1,
    title: "Experience Next-Gen Gaming",
    description: "20% Off on PS5 Accesspries", 
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww"
  },
  {
    id: 2,
    title: "Experience Next-Gen Gaming",
    description: "20% Off on PS5 Accesspries", 
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww"
  },
  {
    id: 3,
    title: "Experience Next-Gen Gaming",
    description: "20% Off on PS5 Accesspries", 
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww"
  }
]

const PopularProducts = () => {
  return (
    <div className='mt-4 mx-auto max-w-7xl'>
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 br-orange-600 mt-2"></div>
      </div>
      <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className='relative group'>
                           <Image unoptimized={true} src={image}
                       alt={title}
                       width={400}
                       height={400}
                       className='group-hover:brightess-75 transition duration-300 w-full; h-auto object cover'/>

   <div className='group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2'>
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">{description}</p>
              <button className='flex items-center gap-1.5 bg-orange-600 px-4 py-2'>Buy Now</button>
              
            </div> 
            </div>
          
  
        ))}
        
      </div>
    </div>
  
  );
};
export default PopularProducts
