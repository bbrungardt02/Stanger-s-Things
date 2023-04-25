import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link className="nav" to="/">
        All Posts
      </Link>
      <Link className="nav" to="/PostForm">
        Post Form
      </Link>
      <Link className="nav" to="/RegisterForm">
        Register Form
      </Link>
      <Link className="nav" to="/LoginForm">
        Log In
      </Link>
    </div>
  );
}
