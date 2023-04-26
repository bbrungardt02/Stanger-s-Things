import { Routes, Route } from "react-router-dom";
import "./App.css";
import PostForm from "./components/auth/PostForm";
import AuthForm from "./components/auth/AuthForm";
import useAuth from "./hooks/useAuth";
import AllPosts from "./components/AllPosts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const { token, user, setToken } = useAuth();
  const navigate = useNavigate();
  console.log("List of Users: ", user);
  return (
    <div className="App">
      <h1>Stranger's Things</h1>
      {token ? <p>Welcome {user.username}</p> : null}
      <div>
        <Link className="nav" to="/">
          All Posts
        </Link>
        <Link className="nav" to="/PostForm">
          Post Form
        </Link>
        <Link className="nav" to="/register">
          Register
        </Link>
        <Link className="nav" to="/login">
          Login
        </Link>
        <button
          onClick={() => {
            setToken(null);
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Log Out
        </button>
      </div>
      <Routes>
        <Route className="allPosts" path="/" element={<AllPosts />} />
        <Route className="postForm" path="/postForm" element={<PostForm />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </div>
  );
}

export default App;
