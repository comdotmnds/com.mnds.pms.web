import React,{useState} from 'react'
import FloorView from './FloorView';
import { useNavigate } from 'react-router-dom';

function FloorId() {
  const [showFloorDtl, setshowFloorDtl] = useState(false);
  const navigate = useNavigate();
  

  const showFloor = () =>{
   
    //setshowFloorDtl(!showFloorDtl);
    navigate('/floor')

  }

  return (
    <div onClick={showFloor} className='p-5 bg-green-50 text-start text-xl font-extrabold inline-block content-start m-5 hover:text-yellow-500 cursor-pointer'>Floor Id
    {/* {showFloorDtl&&<FloorView/>} */}
    </div>
  )
}

export default FloorId