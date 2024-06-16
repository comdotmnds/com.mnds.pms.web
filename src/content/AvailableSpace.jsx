import React from 'react'

function AvailableSpace({spotDtl}) {
  return (
    <>
          <div className=' outline-none p-5 bg-gray-500 inline rounded-xl font-extrabold'>Available 2-wheeler spot: 
            <span> {spotDtl.availableTwoWheelerSpot}</span>
          </div>
          
          <div className=' outline-none p-5 bg-gray-500 inline rounded-xl font-extrabold'>Available 4-wheeler spot: 
          <span> {spotDtl.availableFourWheelerSpot}</span>
          </div>
    </>

  )
}

export default AvailableSpace