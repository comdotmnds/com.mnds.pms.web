import React from "react";
import Spot from "./Spot";
function FourWheeler() {
  let spotColor = "blue";
  const x = 20;
  const children = [];

  for (let index = 1; index < 20; index++) {
    if (index % 2 === 0) {
      spotColor = "green";
    } else {
      spotColor = "orange";
    }
    children.push(<Spot width={50} height={60} clr={spotColor} />);
  }
  return (
    <div className="container mx-auto px-4 py-8  flex space-x-4 items-center">
      {children}
    </div>
  );
}

export default FourWheeler;
