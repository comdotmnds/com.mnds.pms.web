import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Parking Management System
        </div>
        <ul className="flex space-x-4">
          <li>
            <div className="text-white hover:text-yellow-500">Home</div>
          </li>
          <li>
            <div className="text-white hover:text-yellow-500">Parking</div>
          </li>
          <li>
            <div className="text-white hover:text-yellow-500">Reports</div>
          </li>
          <li>
            <div className="text-white hover:text-yellow-500">Admin</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
