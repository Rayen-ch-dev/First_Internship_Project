import React, { useState } from "react";
import Form from "./Form";
import Axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [role, setRole] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:3002/register", {
        username,
        password,
        role,
      });
      if (response.status === 200) {
        alert("Registration successful! You can now log in.");
      }
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  };
  return (
    <div>
      <Form
        mode="signup"
        onSubmit={onSubmit}
        setUsernameValue={setUsername}
        setPasswordValue={setPassword}
        setRoleValue={setRole} // ✅ Pass this function
      />
    </div>
  );
};

export default Register;
