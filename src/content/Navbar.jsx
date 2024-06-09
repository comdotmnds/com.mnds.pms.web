import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../admin/AuthContext";
function Navbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login");
  };
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
          <li>
            <button
              onClick={onLogout}
              className="text-white hover:text-yellow-500"
              type="button"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
