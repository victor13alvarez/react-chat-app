import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import SigninForm from "./components/SigninForm";
const App = () => {
  if (!localStorage.getItem("username"))
    return localStorage.getItem("signOrLog") !== "sign" ? (
      <LoginForm></LoginForm>
    ) : (
      <SigninForm></SigninForm>
    );
  return (
    <ChatEngine
      height="100vh"
      projectID="fae5bb7d-c541-4cb7-9858-fe75d1129932"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}></ChatFeed>}
    ></ChatEngine>
  );
};

export default App;
