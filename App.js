import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AssignOwner from "./components/AssignOwner";
import RegisterDevice  from "./components/RegisterDevice";
import UpdateDeviceStatus from "./components/UpdateDeviceStatus";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/register">Register Device</Link> |{" "}
        <Link to="/assign-owner">Assign Owner</Link> |{" "}
        <Link to="/update-status">Update Status</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<RegisterDevice />} />
        <Route path="/assign-owner" element={<AssignOwner />} />
        <Route path="/update-status" element={<UpdateDeviceStatus />} />
        <Route path="*" element={<div>Select an option above.</div>} />
      </Routes>
    </Router>
  );
}

export default App;
