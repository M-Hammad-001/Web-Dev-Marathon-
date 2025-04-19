import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // default role
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   await axios.post("http://localhost:5000/api/auth/register", formData);
    //   navigate("/login");
    // } catch (err) {
    //   setError(err.response?.data?.message || "Registration failed");
    // }
    console.log("hello");
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-orange-200 font-display">
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register Now!</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded text-gray-600"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded text-gray-600"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded text-gray-600"
          required
        />
        <div className="flex justify-between items-center mb-4">
          <label className="font-semibold text-gray-600">Register as:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="rounded p-1 bg-none border-1 border-gray-800 text-gray-700 outline-0"
          >
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 cursor-pointer">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
