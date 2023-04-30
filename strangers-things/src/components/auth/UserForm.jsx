import { useState, useEffect } from "react";
import { fetchMe, deletePost, updatePost } from "../../api/users";

export default function UserForm() {
  const [token] = useState(localStorage.getItem("token"));
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    async function getPosts() {
      const dataList = await fetchMe(token);
      setPosts(dataList.data.posts);
    }
    getPosts();
  }, [token]);
  return (
    <div>
      <h1>My Posts</h1>
      {posts.map((post) => {
        const POST_ID = post._id;
        let activated = "";
        if (post.active === true) {
          activated = "True";
        } else {
          activated = "False";
        }
        return (
          <div className="parentElement">
            <div key={post._id} className="gradient-border" id="box">
              {/* <div>insert image here</div> */}
              <h3>{post.title}</h3>
              <p>Active: {activated}</p>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
              <div>
                Messages:
                {post.messages.map((message) => {
                  return (
                    <div key={message._id}>
                      <p>From: {message.fromUser.username}</p>
                      <p>Content: {message.content}</p>
                    </div>
                  );
                })}
              </div>
              <p>Created at: {post.createdAt}</p>
              <p>Updated at: {post.updatedAt}</p>
              <p>Location: {post.location}</p>
              <button
                id="button1"
                onClick={async () => {
                  await deletePost(token, POST_ID);
                  const response = await fetchMe(token);
                  if (response.success) {
                    setPosts(response.data.posts);
                  } else {
                    setError(response.error);
                  }
                }}
              >
                Delete Post
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
