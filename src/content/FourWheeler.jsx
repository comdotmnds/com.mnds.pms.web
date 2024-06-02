import React from 'react'

function FourWheeler() {

    const spotColor = 'blue'
  const x = 20;
  const children = [];
  

  for (let index = 0; index <22 ; index++) {
    children.push(<Spot width ={10} height= {20} clr={spotColor}/>)
  }
  return (
    <div>{children}</div>
  )
}

export default FourWheeler