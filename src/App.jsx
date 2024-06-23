import "./App.css";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import { useState } from "react";
import SignUpDetails from "./admin/SignUpDetails";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { AuthContext, AuthProvider} from "./admin/AuthContext";
import ProtectedRoute from "./admin/ProtectedRoute";
import FloorView from "./content/FloorView";
import { FloorDetailProvider } from "./content/FloorDetailContext";
import Home from "./content/Home";
import NewFloor from "./content/NewFloor";
import EntryView from "./content/EntryView";
import ExitView from "./content/ExitView";


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
      <ParkingLot />
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
        <FloorDetailProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUpDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/floor" element={<FloorView />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/new floor" element={<NewFloor/>}/>
            <Route path="/entryView" element={<EntryView/>}/>
            <Route path="/exitView" element={<ExitView/>}/>
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
        </FloorDetailProvider>
      </AuthProvider>
    </>
  );
}

export default App;