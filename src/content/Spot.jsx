import React from 'react'

function Spot(w, h, clr) {
  // let clr='red'
  // let w= 24
  // let h= 24
  
  return (
    
<div className={`w-${w} h-${h} bg-${clr}-800 rounded-full justify-center items-center text-black text-xl font-bold flex`}>

</div> 
 
  )
}

export default Spot