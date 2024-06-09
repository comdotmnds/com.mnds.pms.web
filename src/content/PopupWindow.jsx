import React from 'react'
import { useState } from 'react';

const PopupWindow = () => {
    const [isOpen, setIsOpen] = useState(true);

    // const openPopup = () => {
    //   setIsOpen(true);
    // };
  
    const closePopup = () => {
      setIsOpen(false);
    };
  return (
    <div className="relative">
    {isOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-orange-200 p-40 rounded-md shadow-lg ">
          <button onClick={closePopup} className=" top-0 right-0 m-4 text-gray-500 hover:text-gray-700 cursor-pointer rounded-full ">
            &#10005;
          </button>
          
          <h2 className="text-5xl mb-8 font-semibold text-center italic">Spot details</h2>
          <ol>
            <li className='text-2xl'>Spot id: </li>
            <li className='text-2xl'>Floor number: </li>
            <li className='text-2xl'>Vehicle number: </li>
            <li className='text-2xl'>Vehicle type: </li>
            <li className='text-2xl'>Owner name: </li>
          </ol>
        </div>
      </div>
    )}
  </div>
  )
}

export default PopupWindow