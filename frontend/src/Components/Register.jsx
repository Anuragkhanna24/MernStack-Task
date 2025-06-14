import axios from "axios";
import React, { useState } from "react";

const Register = () => {
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:5000/api/auth/register`, form);
        alert('Registered Successfully!')
    }
    return (
        <div className="bg-light p-5">
            {/* <form onSubmit={handleSubmit}>
                <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
                <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <button type="submit">Register</button>
            </form> */}
              <h1 className="my-3">
                Registration  
            </h1>
             <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">User Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => setForm({ ...form, username: e.target.value })} required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setForm({ ...form, email: e.target.value })} required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setForm({ ...form, password: e.target.value })}required />
                </div>
         
                <button type="submit" className="btn px-4 btn-info rounded-pill btn-primary">Register</button>
            </form>

        </div>
    )
}
export default Register;