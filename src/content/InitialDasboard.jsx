import React from 'react'
import SpaceInfo from './SpaceInfo';

function InitialDasboard() {

    const child = [];

    for (let index = 0; index < 10; index++) {
        child.push(<SpaceInfo/>)
        
    }
  return (
    <div className='bg-black'>
    
      {child}
    </div>
      
  )
}

export default InitialDasboard