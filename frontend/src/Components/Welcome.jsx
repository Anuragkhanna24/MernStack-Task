import axios from "axios";
import React, { useEffect, useState } from "react";

const Welcome=()=>{
    const [message, setMessage]=useState('')

    useEffect(()=>{
const fetchUser=async ()=>{
    const token=localStorage.getItem('token')
    const res= await axios.get('http://localhost:5000/api/user',{
        headers:{Authorization: `Bearer ${token}`}
    })
    setMessage(res.data.message)
}
fetchUser();
    },[])

    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}
export default Welcome;