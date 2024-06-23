import React, { useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../admin/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faHome, faSignOutAlt, faSquareParking } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
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
            <div className="text-white hover:text-yellow-500 cursor-pointer"><Link to="/home">
            <FontAwesomeIcon icon={faHome}/> Home</Link></div>
          </li>
          <li>
            <div className="text-white hover:text-yellow-500 cursor-pointer"><Link to="/dashboard">
            <FontAwesomeIcon icon={faSquareParking}/> Parking</Link></div>
          </li>
          <li>
            <div className="text-white hover:text-yellow-500 cursor-pointer"><Link to="/new floor"><FontAwesomeIcon icon={faCirclePlus}/> New Floor</Link></div>
          </li>
          
          <li>
          <button onClick={handleLogout} className="text-white hover:text-yellow-500 cursor-pointer ">
       
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
