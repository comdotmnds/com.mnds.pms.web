import React, { useContext } from 'react'
import FloorId from './FloorId'
import AvailableSpace from './AvailableSpace'
import TotalSpace from './TotalSpace'


function SpaceInfo ({floorDtl}) {


  return (
    <>

      <div>
      <FloorId floorIdDtl={floorDtl}/>
    <div className="bg-gray-700 p-7  rounded-md shadow-md space-x-12 flex-auto m-3 inline-block">
    
        <AvailableSpace spotDtl = {floorDtl}/>
        {/* <TotalSpace/> */}
    </div>
      </div>

    </>

  )
}

export default SpaceInfo