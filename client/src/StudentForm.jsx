import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const StudentForm = () => {
  const [name, setname] = useState("");
  const [Class, setClass] = useState("");
  const [subject, setsubject] = useState("");
  const navigate = useNavigate();

  const handleOnclick = async (e) => {
    e.preventDefault();   // ❌ you wrote `preventdefault()` (wrong)

    const data = { name, Class, subject };

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/student`, data);

      if (response.status !== 201) {   // ❌ axios doesn't have `ok`, use status
        console.log("Data not saved in DB");
      }

      console.log("✅ Data saved successfully");
      setname("");
      setClass("");
      setsubject("");

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleOnclick}>
        <input type="text" placeholder="Enter name" value={name} onChange={(e) => setname(e.target.value)} />
        <input type="text" placeholder="Enter class" value={Class} onChange={(e) => setClass(e.target.value)} />
        <input type="text" placeholder="Enter subject" value={subject} onChange={(e) => setsubject(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => navigate("/list")}>View all student data</button>
    </div>
  );
};

export default StudentForm;
