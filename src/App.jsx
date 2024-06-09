import "./App.css";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Navbar from "./content/Navbar";
import ParkingLot from "./content/ParkingLot";
import { useState } from "react";
import SignUpDetails from "./admin/SignUpDetails";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "./admin/AuthContext";
import ProtectedRoute from "./admin/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

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
      {/* <SignUpDetails/> */}
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUpDetails />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
