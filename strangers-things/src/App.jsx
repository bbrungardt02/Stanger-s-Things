import { useState } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  console.log("Token from App.jsx: ", token);
  return (
    <div className="App">
      <h1>Stranger's Things</h1>
      <RegisterForm setToken={setToken} />
    </div>
  );
}

export default App;
