import { useState } from "react";
import axios from "axios";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const authObject = {
      "Project-ID": "fae5bb7d-c541-4cb7-9858-fe75d1129932",
      "User-Name": username,
      "User-Secret": password,
    };
    //Check Both Passwords
    //if both passwords match

    if (repeatedPassword === password) {
      //Username | password => chatengine -> create user
      try {
        //works out -> register -> log in
        console.log("LLAMAR A LA API", username, password);
        // await axios.post("https://api.chatengine.io/users", {
        //   headers: authObject,
        // });

        // // save user in order to log in after sign in
        // localStorage.setItem("username", username);
        // localStorage.setItem("password", password);
        // setError("");
        // window.location.reload();
      } catch (error) {
        //error -> try with new username
        setError("Oops, something went wrong!");
      }
    }
    //if both passwords does not match
    else {
      var popup = document.getElementById("noMatchingPasswordError");
      popup.classList.add("popUpAnimation");
      setTimeout(() => {
        popup.classList.remove("popUpAnimation");
      }, 2000); //matches animation's duration
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    localStorage.setItem("signOrLog", "log");
    window.location.reload();
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Sign In</h1>
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
          <input
            type="password"
            value={repeatedPassword}
            onChange={(event) => setRepeatedPassword(event.target.value)}
            className="input"
            placeholder="Repeat password"
            required
          ></input>
          <span className="popUpError" id="noMatchingPasswordError">
            Password doesn't match!
          </span>
          <div
            align="center"
            //if want to fix on bottom side
            // style={{
            //   position: "absolute",
            //   bottom: "4%",
            //   left: 0,
            //   right: 0,
            //   margin: "auto",
            // }}
          >
            <button type="submit" className="button">
              <span>SIGN IN</span>
            </button>
            <h3 className="registration">
              <span style={{ padding: "5px" }}>Already registered?</span>

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
