import React, { useState } from 'react'
import Form from './Form'
import Axios from 'axios'
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const[_,SetCookies] =useCookies("access_token")
    const navigate =useNavigate()
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await Axios.post("http://localhost:3002/login", { username, password });
          if (response.status === 200) {
            SetCookies("access_token", response.data.token);
            window.localStorage.setItem("adminID", response.data.adminId);
            navigate("/admin");
          }
        } catch (error) {
            if(error.response && error.response.status===401){
                alert("Username or password incorrect");
            }else{
                console.error(error);
                alert("An error occurred. Please try again.");

            }

        }
      };

  return (
    <div>
        <Form
        onSubmit={onSubmit}
        setPasswordValue={setPassword}
        setUsernameValue={setUsername}

      />
    </div>
  )
}

export default Login
