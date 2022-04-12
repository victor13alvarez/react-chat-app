import { useState } from "react";
import axios from "axios";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const authObject = {
      "Project-ID": "fae5bb7d-c541-4cb7-9858-fe75d1129932",
      "User-Name": username,
      "User-Secret": password,
    };
    //Username | password => chatengine -> give messages
    try {
      //works out -> logged in
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      setError("");
      window.location.reload();
    } catch (error) {
      //error -> try with new username
      setError("Oops, incorrect credentials!");
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    localStorage.setItem("signOrLog", "sign");
    window.location.reload();
  };
  return (
    <div className="wrapper">
      <div
        className="form"
        style={
          {
            //   display: localStorage.getItem("noAccountRegistered") ? "none" : "",
          }
        }
      >
        <h1 className="title">Log In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input"
            placeholder="Username"
            required
          ></input>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
            placeholder="Password"
            required
          ></input>
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
            <h3 className="registration">
              <span style={{ padding: "5px" }}>Not registered?</span>

              <span
                className="registration-link"
                style={{ padding: "5px", cursor: "pointer" }}
                onClick={handleClick}
              >
                Click here!
              </span>
            </h3>
            <h2 className="error">{error}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
