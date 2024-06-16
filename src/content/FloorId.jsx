import React,{useContext, useState} from 'react'
import FloorView from './FloorView';
import { useNavigate } from 'react-router-dom';
import { FloorDetailContext } from './FloorDetailContext';

function FloorId({floorIdDtl}) {
  const [showFloorDtl, setshowFloorDtl] = useState(false);
  const navigate = useNavigate();
  
  const {flrId} = useContext(FloorDetailContext)
  const showFloor = () =>{
   
    //setshowFloorDtl(!showFloorDtl);
    flrId(floorIdDtl.floorId)
    navigate('/floor')

  }

  return (
    <div onClick={showFloor} className='p-5 bg-green-50 text-start text-xl font-extrabold inline-block content-start m-5 hover:text-yellow-500 cursor-pointer'>Floor Id: {floorIdDtl.floorId} 
    {/* {showFloorDtl&&<FloorView/>} */}
    </div>
  )
}

export default FloorId