import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { createPost } from "../../api/users";

export default function PostForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { token } = useAuth();

  return (
    <div className="createPost">
      <h1 className="PostFormTitle">Create Post</h1>
      <form
        className="createPostForm"
        onSubmit={async (e) => {
          e.preventDefault();
          await createPost(title, description, price, token);
          navigate("/");
        }}
      >
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br></br>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br></br>
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <br></br>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
