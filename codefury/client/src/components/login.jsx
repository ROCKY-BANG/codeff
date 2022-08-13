import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";




export default function Login() {

    const [values, setValues] = useState({ email: "", password: "" });
   
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values);
        navigate("/navigation");
    }

  return (
    <div className="container1">
      <h2>Login to your Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account ?<Link to="/register"> Register </Link>
        </span>
      </form>
     
    </div>
  )
}
