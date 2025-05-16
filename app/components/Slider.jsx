'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const Slider = () => {
  const data = [
    {
      id: 1,
      title: "ps5",
      offer: "rtttyyUUU",
      primaryBtn: 'buy now',
      secondaryBtn: 'more info',
      images: 'https://m.media-amazon.com/images/I/41ECK5cY-2L._AC_UY218_.jpg'
    },
    {
      id: 2,
      title: "ps3",
      offer: "rtttyyUUU",
      primaryBtn: 'buy now',
      secondaryBtn: 'more info',
      images: 'https://i.ebayimg.com/images/g/FCMAAOSwVZlmdZ~T/s-l1600.webp'
    },
    {
      id: 3,
      title: "ps4",
      offer: "rtttyyUUU",
      primaryBtn: 'buy now',
      secondaryBtn: 'more info',
      images: 'https://i.ebayimg.com/images/g/~SwAAOSwl05nb3ii/s-l1600.webp'
    },
    
     
  ];
  const [currentSlide, setCurrentSlide] = useState(0); //keep track of the current slide index

  // Authomatically move to the next slide every 3 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.lenght); //loop back to first after the last
    }, 3000);
    
    return () => clearInterval(interval)//clear timer on unmount
      
  }, [data.lenght]);

  // Chnage slide when user clicks a dot

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };


  return (
   
     
    <div className="overflow-hidden mx-auto m-6 mt-12 max-w-7xl relative w-full">

      {/* Slider Container  */}
      <div className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`, //move slider
        }}
      >

       
        
        {data.map((slide, index) => (
          <div key={slide.id}
            className='flex flex-col-reverse md:flex-row items-center justify-between bg-[#f8f9fc] py-10 px-5 md:px-16 min-w-full rounded-xl' >
            {/* Text Section */}
            <div className='md:pl-8 mt-6 md:mt-0 w-full md:w-1/2'>
              <p className='text-sm  text-orange-600 font-semibold'>
                {slide.offer}</p>
              <h1 className='text-3xl md:text-4xl font-bold mt-2 mb-4'>
                {slide.title}
              </h1>
              <div className='flex gap-4 mt-4'>
                <button className='px-8 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 transition'>
                  {slide.primaryBtn}
                </button>
                <button className='px-12 py-3 border border-orange-600 rounded hover:bg-orange-50 transition'>
                  {slide.secondaryBtn}
                </button>

              </div>
              
            </div>
            {/* Image Section */}
            <div className="flex justify-center items-center w-full md:w-1/2">
              <Image
                unoptimized
                src={slide.images}
                alt={`Slide ${index + 1}`}
                width={400}
                height={400}
                className='rounded object-contain'
                                              
              />

            </div>

          </div>
        
            
        ))}
      </div>
      
      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-orange-600" : "bg-gray-300"}`}
                      
          />
        ))}
        

      </div>

      
    </div>
  );
};

export default Slider

