import React from "react";
import Spot from "./Spot";
import FloorDetail from "./FloorDetail";
import TwoWheeler from "./TwoWheeler";
import FourWheeler from "./FourWheeler";

function Floor() {
  // const spotColor = 'blue'
  // const x = 20;
  // const children = [];

  // for (let index = 0; index <22 ; index++) {
  //   children.push(<Spot width ={10} height= {20} clr={spotColor}/>)
  // }
  // for (let index = 0; index <22 ; index++) {
  //   children.push(<Spot width ={7} height= {10} clr={spotColor}/>)
  // }

  return (
    <>
      <div className="bg-gray-200 items-center">
        <div className="container mx-auto px-4 py-8 space-x-4 items-center">
          <div>
            {" "}
            <TwoWheeler />
          </div>
          <div>
            <FourWheeler />
          </div>
        </div>
      </div>
    </>
  );
}

export default Floor;
