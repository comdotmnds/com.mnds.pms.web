import React from 'react'
import { useState,useEffect } from 'react';

const PopupWindow = () => {
    const [isOpen, setIsOpen] = useState(true);

    // const openPopup = () => {
    //   setIsOpen(true);
    // };
  
    // api
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8080/pms/get/spot/detail/7");
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    

    // api
    const closePopup = () => {
      setIsOpen(false);
    };
  return (
    <div className="relative">
    {isOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-orange-200 p-40 rounded-md shadow-lg ">
          <button onClick={closePopup} className="justify-center m-3 border-2  px-3 py-1 border-black text-black hover:text-yellow-950 cursor-pointer rounded-full font-semibold ">
            &#10005; 
          </button>
          
          <h2 className="text-5xl mb-8 font-semibold text-center italic p-6">Spot details</h2>
          <ol>
            <li className='text-2xl'>Spot id: {data.spotId}</li>
            <li className='text-2xl'>Floor number: {data.floorId}</li>
            <li className='text-2xl'>Vehicle number: {data.vehicleNumber}</li>
            <li className='text-2xl'>Vehicle type: {data.vehicleType}</li>
            <li className='text-2xl'>Owner name: {data.ownerName}</li>
          </ol>
        </div>
      </div>
    )}
  </div>
  )
}

export default PopupWindow