import React, { useState } from "react";

export default function LoginForm(token, user) {
  const [username, password] = useState("");
  return (
    <div>
      <h1>Log In</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => username(e.target.value)}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => password(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
