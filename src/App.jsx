import "./App.css";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Navbar from "./content/Navbar";
import ParkingLot from "./content/ParkingLot";
import { useState } from "react";
import SignUpDetails from "./admin/SignUpDetails";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        // Perform logout logic here
        setIsLoggedIn(false);
    }

  return (
    <>
    {/* <Login/> */}
      {/* <Navbar />
      <br></br>
      <ParkingLot /> */}
      {/* <div>
            {isLoggedIn ? (
                <Dashboard onLogout={handleLogout} />
            ) : (
                <Login onSubmit={handleLogin} />
            )}
        </div> */}
        <SignUpDetails/>
    </>
  );
}

export default App;
