
import React, { createContext, useState } from "react";

export const FloorDetailContext = createContext();
export const FloorDetailProvider = ({ children }) => {
  const [floorDetails, setFloorDetails] = useState(new Map());
  const [flId, setFlId] = useState("");
  
  const detail = (dtl) => {
    setFloorDetails(dtl);
  };
  const flrId = (fId) =>{
    setFlId(fId)
  }
  return (
    <FloorDetailContext.Provider value={{ floorDetails ,detail,flrId,flId}}>
      {children}
    </FloorDetailContext.Provider>
  );
};
