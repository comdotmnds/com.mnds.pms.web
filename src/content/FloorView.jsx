import React ,{ useContext }from 'react'
import TwoWheeler from './TwoWheeler'
import Spot from './Spot';
import Bike from './Bike';
import Car from './Car';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { FloorDetailContext } from './FloorDetailContext';

function FloorView() {

    //const { floorViewDtl } = useParams();
    const { flId, floorDetails}  = useContext(FloorDetailContext);
    const flrdtls = floorDetails[flId -1]
    
    const bikeChild = [];
    const carChild = [];



    for (let index = 0; index < flrdtls.availableTwoWheelerSpot; index++) {
        bikeChild.push(<Bike/>);   
    }
    for (let index = 0; index < flrdtls.availableFourWheelerSpot; index++) {
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