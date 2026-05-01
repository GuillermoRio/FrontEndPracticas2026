'use client'
import { useState } from "react";
import { Login } from "../components/login/login"; 
import { Register } from "../components/register/register"; 
import './page.css'
const   login = () => {

  const [login,setLogin] = useState<boolean>(true)
  const [register,setRegister] = useState<boolean>(false)
  
 return (
  <div className="auth-wrapper">

    {login &&
      <div className="auth-card"> 
        <div className="title">
          <span className="text-dark">NEBRIJA</span>
          <span className="text-blue"> SOCIAL</span>
        </div>
        <button 
          className="auth-button"
          onClick={() => {setRegister(true); setLogin(false)}}
        >
          Register
        </button>

        <Login/>
      </div>
    }

    {register &&
      <div className="auth-card"> 
        <div className="title">
          <span className="text-dark">NEBRIJA</span>
          <span className="text-blue"> SOCIAL</span>
        </div>
        <button 
          onClick={() => {setRegister(false); setLogin(true)}}
        >
          Login
        </button>
        <Register/>
      </div>
    }

  </div>
);
}


export default login;