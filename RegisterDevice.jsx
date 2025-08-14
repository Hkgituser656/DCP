import React, { useState } from "react";
import axios from "axios";

const RegisterDevice = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [status, setStatus] = useState("active");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { serialNumber, deviceName, status };
      const res = await axios.post("http://localhost:8080/api/devices/register", payload);
      setMessage(res.data);
    } catch (error) {
      setMessage(error.response?.data || "Error registering device");
    }
  };

  return (
    <div>
      <h2>Register Device</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Serial Number: </label>
          <input
            type="text"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Device Name: </label>
          <input
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status: </label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="soft_deleted">Soft Deleted</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterDevice;
