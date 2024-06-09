import React from 'react'
import TwoWheeler from './TwoWheeler'
import Spot from './Spot';
import Bike from './Bike';
import Car from './Car';
import Navbar from './Navbar';

function FloorView() {
    
    const bikeChild = [];
    const carChild = [];
    for (let index = 0; index < 55; index++) {
        bikeChild.push(<Bike/>);   
    }
    for (let index = 0; index < 33; index++) {
        carChild.push(<Car/>);
    }


  return (
    <>
    <Navbar />
    <div className='border bg-gray-800'>
        <div className='bg-blue-100 mx-8 my-8'>
            <h1 className='font-extrabold text-2xl'>2-Wheeler Parking</h1>
        {bikeChild}
        </div>
        <div className='bg-violet-200 m-8'>
            <h1 className='font-extrabold text-2xl'>4-Wheeler Parking</h1>
        {carChild}
        </div>
        
    </div>
    </>
  )
}

export default FloorView