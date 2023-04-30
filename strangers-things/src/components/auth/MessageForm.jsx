import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { messagePost } from "../../api/users";
import useAuth from "../../hooks/useAuth";

export default function PostForm() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [content, setContent] = useState("");
  const { token } = useAuth();

  return (
    <div className="messagePost">
      <h1 className="messageFormTitle">Send Post Message</h1>
      <form
        className="gradient-border"
        id="box1"
        onSubmit={async (e) => {
          e.preventDefault();
          await messagePost(content, token, postId);
          navigate("/");
        }}
      >
        <label>Content:</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br></br>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
