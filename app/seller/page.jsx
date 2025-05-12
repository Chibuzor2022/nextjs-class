"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import {assets} from '../../assets/assets'



const page = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className='flex-1  min-h-screen flex flex-col justify-between'>

      <form action={handleSubmit} className='md:p-10 p-4 space-y-5 max-w-lg'>
        <div className="">
          <p>Product Image</p>
          <div className="">
        <Image
          alt=""
          width={100}
          height={100}
          className=""
          src={assets.upload_area}
        />
            <input type="file" />
            </div>
        <div className="flex flex-col mt-4 gap-1 max-w-md">
          <p className="font-medium">Product Name</p>
          <input
            id='product-name'
            type="text"
            placeholder="Enter Product Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
              className="border rounded py-3 px-3 border-gray-300" />
          
          </div>
        
        <div className="flex flex-col mt-4 gap-1 max-w-md">
          <p className="font-medium">Product Description</p>
          <textarea
            rows={4}
            id='product-description'
            type="text"
            placeholder='Enter Product Description'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
            className='border rounded py-3 px-3 border-gray-300' />
          <div className="flex items-center mt-4 gap-5 flex-wrap">
            <div className="flex flex-col gap-1 w-32">
              <label className="text-base font-medium">Category</label>
              <select
                id="category"
                className="outline-none md:py-2.5 py-2 px-3 rounded border-gray-500/40"
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={category}>
                <option value="Earphone">Earphone</option>
                <option value="Headphone">Headphone</option>
                <option value="Watch">Watch</option>
                <option value="Smartphone">Smartphone</option>
                <option value="Camera">Camera</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-32">
              <label className="text-base font-medium">Product Price</label>
              <input
                id='product-price'
                type="number"
                placeholder='0'
                className="outline-none md:py-2.5 py-2 px-3 rounded border-gray-500/40"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                required
              />

            </div>
            <div className="flex flex-col gap-1 w-32">
              <label className='text-base font-medium' htmlFor='offer-price'>Offer Orice</label>
              <input
                id='offer-price'
                type="number"
                placeholder='0'
                className="outline-none md:py-2.5 py-2 px-3 rounded border-gray-500/40"
                onChange={() => setOfferPrice(e.target.value)}
                value={offerPrice}
                required
              />

            </div>

          </div>
          
          <button
            type='submit'
            className="px-8 py-2.5 mt-4 bg-orange-600 text-white font-medium rounded">
            Add
          </button>

        </div>
</div>
      </form>
    </div>
  );
};

export default page
