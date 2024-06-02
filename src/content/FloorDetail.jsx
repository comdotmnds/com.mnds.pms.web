import React from "react";
import Floor from "./Floor";
import FloorDetailChild from "./FloorDetailChild";

function FloorDetail() {
  const childrenData = [
    {
      key: "Floor Id",
      value: "abcd",
    },
    {
      key: "Available Spot",
      value: "20",
    },
    {
      key: "Total Spot",
      value: "20",
    },
  ];

  const children = [];
  childrenData.map(
    (child) => (
      console.log(child.key),
      children.push(<FloorDetailChild id={child.key} value={child.value} />)
    )
  );

  return (
    <>
      <div className="px-4 outline-none py-1 rounded-full text-black bg-purple-600 flex space-x-7">
        {children}
      </div>
      <Floor />
    </>
  );
}

export default FloorDetail;
