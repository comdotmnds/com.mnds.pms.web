import React,{useState} from 'react'
import PopupWindow from './PopupWindow'

function Bike() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () =>{
   
    setShowPopup(!showPopup);

  }

    
  return (
    <>
        <div className=" rounded-lg inline-block m-3">
            <img onClick={openPopup} src="2wheel.jpg" alt="Bike Image" className="mx-auto h-20 w-13 rounded-full inline-block"/>
            {showPopup && <PopupWindow/>}
            <p className="text-lg font-semibold">Spot ID</p>
  </div>
    </>

  )
}

export default Bike