import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  // local state for inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 👇 CHANGED: instead of setUser, we use addUser
  const { addUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👇 send data to context
    addUser(username, password);

    // clear inputs after login
    setUsername("");
    setPassword("");
  };

  return (
    <div className="profile-container">
      <h1 className="title">Profile</h1>
      <h2 className="sub-title">Login Here :</h2>

      <div className="login-box">
        <input
          type="text"
          placeholder="username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;