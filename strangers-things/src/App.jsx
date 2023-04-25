import { Routes, Route } from "react-router-dom";
import "./App.css";
import PostForm from "./components/auth/PostForm";
import LoginForm from "./components/LoginForm";
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
        <Route className="postForm" path="/postForm" element={<PostForm />} />
        <Route
          className="registerForm"
          path="/RegisterForm"
          element={<RegisterForm />}
        />
        <Route
          className="LoginForm"
          path="/LoginForm"
          element={<LoginForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
