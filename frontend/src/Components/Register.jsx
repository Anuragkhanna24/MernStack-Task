import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:5000/api/auth/register", form);

        if (response.status === 200 || response.status === 201) {
            alert('Registered Successfully!');
            navigate('/login');
        }
    } catch (error) {
        alert('Registration failed. Please try again.');
    }
};

  return (
    <div className="bg-light p-5">
      <h1 className="my-3">Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">User Name</label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn px-4 btn-info rounded-pill btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
