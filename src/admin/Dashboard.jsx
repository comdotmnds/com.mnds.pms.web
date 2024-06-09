// Dashboard.js
import React from "react";
import Navbar from "../content/Navbar";
import ParkingLot from "../content/ParkingLot";
import FloorView from "../content/FloorView";
import InitialDasboard from "../content/InitialDasboard";

const Dashboard = ({ onLogout }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Add your dashboard content here */}
          {/* <ParkingLot /> */}
          <InitialDasboard/>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
