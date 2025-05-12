'use client'	
import { useState } from 'react';

//This is just a sample data, you can replace it with actual data from your API or database 
  const Page = () => {
    const [orders, setOrders] = useState([
      { id: 12345, date: '2023-10-01', total: 99.99 },
      { id: 12346, date: '2023-10-02', total: 49.99 },
      { id: 12347, date: '2023-10-03', total: 29.99 },
      { id: 12348, date: '2023-10-04', total: 19.99 },
      { id: 12349, date: '2023-10-05', total: 39.99 },
      { id: 12350, date: '2023-10-06', total: 59.99 },
      { id: 12351, date: '2023-10-07', total: 89.99 },
      { id: 12352, date: '2023-10-08', total: 79.99 },
      { id: 12353, date: '2023-10-09', total: 69.99 },
      { id: 12354, date: '2023-10-10', total: 59.99 },
    ]);
    const [hasMore, setHasMore] = useState(true);

    const loadMoreOrders = () => {
      const newOrders = [
        { id: 12349, date: '2023-10-05', total: 39.99 },
        { id: 12350, date: '2023-10-06', total: 59.99 },
        { id: 12351, date: '2023-10-07', total: 89.99 },
        { id: 12352, date: '2023-10-08', total: 79.99 },
        { id: 12353, date: '2023-10-09', total: 69.99 },
        { id: 12354, date: '2023-10-10', total: 59.99 }
      ];
      setOrders((prevOrders) => [...prevOrders, ...newOrders]);
      setHasMore(false); // Simulate no more orders to load
    };
    return (
      <div className='mx-auto max-w-7xl flex flex-col items-start px-6 md:px-16 lg:px-32 py-14'>
        <div className='flex flex-col items-start pt-14'>
          <p className='text-2xl font-medium'>My Orders</p>
          <div className='w-16 h-2 rounded-2xl bg-orange-600'></div>
          <p className='py-4 text-sm'>
            You can find a summary of all your past orders below. Click on "View Details" to see more information about each order.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-col items-center gap-6 mt-6 pb-14 w-full'>
          {orders.map((order) => (
            <div key={order.id} className='bg-white shadow-md rounded-lg p-4 w-full max-w-sm'>
              <h2 className='text-lg font-semibold'>Order #{order.id}</h2>
              <p className='text-gray-600'>Date: {order.date}</p>
              <p className='text-gray-600'>Total: ${order.total.toFixed(2)}</p>
              <button className='mt-4 px-4 py-2 bg-orange-600 text-white rounded'>View Details</button>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className='flex justify-center items-center py-4'>
            <button
              onClick={loadMoreOrders}
              className='px-4 py-2 bg-orange-600 text-white rounded'
            >
              Load More
            </button>
          </div>
        )}
      </div>
    );
  };

export default Page