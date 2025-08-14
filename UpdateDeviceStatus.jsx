import React, { useState } from "react";
import axios from "axios";

const UpdateDeviceStatus = () => {
  const [deviceId, setDeviceId] = useState("");
  const [status, setStatus] = useState("active");
  const [message, setMessage] = useState("");

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    try {
      // Your backend expects status as a query parameter
      const res = await axios.put(
        `http://localhost:8080/api/devices/${deviceId}/update-status`,
        null,
        {
          params: { status },
        }
      );
      setMessage(res.data);
    } catch (error) {
      setMessage(error.response?.data || "Error updating status");
    }
  };

  return (
    <div>
      <h2>Update Device Status</h2>
      <form onSubmit={handleUpdateStatus}>
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
          <label>New Status: </label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="soft_deleted">Soft Deleted</option>
          </select>
        </div>
        <button type="submit">Update Status</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateDeviceStatus;
