import React from 'react'
import Floor from './Floor';
import FloorDetail from './FloorDetail';

function ParkingLot() {

    const children = [];

    for (let index = 0; index <10 ; index++) {
      children.push(<FloorDetail/>)  
     // children.push(<Floor/>)
    }
   // children.push(<Floor/>)

  return (
    <div>{children}</div>
  )
}

export default ParkingLot