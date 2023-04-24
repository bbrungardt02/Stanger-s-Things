import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import RegisterForm from "./components/auth/RegisterForm";
import useAuth from "./hooks/useAuth";
import Nav from "./components/auth/Nav";
import AllPosts from "./components/AllPosts";

function App() {
  const { token, user } = useAuth();

  return (
    <div className="App">
      <h1>Stranger's Things</h1>
      <Nav />
      <Routes>
        <Route className="allPosts" path="/" element={<AllPosts />} />
        <Route
          className="registerForm"
          path="/RegisterForm"
          element={<RegisterForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
