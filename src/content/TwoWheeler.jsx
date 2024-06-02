import React from "react";
import Spot from "./Spot";

function TwoWheeler() {
  let spotColor = "white";
  const x = 20;
  const children = [];

  for (let index = 1; index < 40; index++) {
    if (index % 2 === 0) {
      spotColor = "green";
    } else {
      spotColor = "white";
    }
    children.push(<Spot width={20} height={30} clr={spotColor} />);
  }
  return (
    <div className="container mx-auto px-4 py-8  flex space-x-4 items-center">
      {children}
    </div>
  );
}

export default TwoWheeler;
