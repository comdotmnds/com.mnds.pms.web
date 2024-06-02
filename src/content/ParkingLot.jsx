import React from "react";

import FloorDetail from "./FloorDetail";

function ParkingLot() {
  const children = [];

  for (let index = 0; index < 10; index++) {
    children.push(<FloorDetail />);
  }

  return <div>{children}</div>;
}

export default ParkingLot;
