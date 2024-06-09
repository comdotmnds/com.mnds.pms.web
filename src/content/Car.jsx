import React,{useState} from 'react'
import PopupWindow from './PopupWindow';

function Car() {

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () =>{
   
    setShowPopup(!showPopup);

  }
  return (
    <>
    <div className=" rounded-lg inline-block m-3">
        <img onClick={openPopup} src="4wheel.jpg" alt="Car Image" className="mx-auto h-20 w-13 rounded-full inline-block  hover:text-yellow-500 cursor-pointer" />
        {showPopup && <PopupWindow/>}
    <p className="text-lg font-semibold">Spot ID</p>
  </div>
    </>
  )
}

export default Car