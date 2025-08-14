import React, { useState } from "react";
import axios from "axios";

const AssignOwner = () => {
  const [deviceId, setDeviceId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleAssignOwner = async (e) => {
    e.preventDefault();
    try {
      const ownerPayload = { name, email, phoneNumber };
      const res = await axios.post(
        `http://localhost:8080/api/devices/${deviceId}/assign-owner`,
        ownerPayload
      );
      setMessage(res.data);
    } catch (error) {
      setMessage(error.response?.data || "Error assigning owner");
    }
  };

  return (
    <div>
      <h2>Assign Owner to Device</h2>
      <form onSubmit={handleAssignOwner}>
        <div>
          <label>Device ID: </label>
          <input
            type="number"
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Owner Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Owner Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number: </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button type="submit">Assign Owner</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AssignOwner;
