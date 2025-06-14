import axios from "axios";
import React, { useState } from "react";


const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' })
   
      const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem('token', res.data.token);
      window.location.href = '/welcome';
    } catch (err) {
      alert("Login failed. Please check your credentials.");
    }
  };

    return (
        <div className="bg-light p-5 ">
            {/* <form onSubmit={handleSubmit}>
                <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <button type="submit">Login</button>
            </form> */}
            <h1 className="my-3">
                LOGIN 
            </h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setForm({ ...form, email: e.target.value })} required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setForm({ ...form, password: e.target.value })}required />
                </div>
         
                <button type="submit" className="btn px-4 btn-info rounded-pill btn-primary">Login</button>
            </form>

        </div>
    )
}
export default Login;