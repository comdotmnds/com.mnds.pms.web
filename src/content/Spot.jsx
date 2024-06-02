import React from "react";

function Spot({ width, height, clr }) {
  const style = {
    width: width,
    height: height,
    backgroundColor: clr,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div className="spot" style={style}></div>;
}

export default Spot;
