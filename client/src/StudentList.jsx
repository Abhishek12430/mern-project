import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const StudentList = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/studentdata`);
        setdata(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchdata();
  }, []); // ✅ added [] to prevent infinite loop

  return (
    <div>
      <h2>Student List</h2>
      {data.map((prop) => (
        <ul key={prop._id}>   {/* ✅ MongoDB uses `_id` */}
          <li>Name: {prop.name}</li>
          <li>Class: {prop.Class}</li>
          <li>Subject: {prop.subject}</li>
        </ul>
      ))}
      <button onClick={() => navigate("/")}>Back to Form</button>
    </div>
  );
};

export default StudentList;
