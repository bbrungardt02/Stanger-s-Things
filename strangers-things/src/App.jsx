import { useState } from "react";
import "./App.css";
import RegisterForm from "./components/auth/RegisterForm";
import useAuth from "./hooks/useAuth";

function App() {
  const { token, user } = useAuth();

  return (
    <div className="App">
      <h1>Stranger's Things</h1>
      <RegisterForm />
    </div>
  );
}

export default App;
