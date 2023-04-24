import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../api/users";

export default function AllPosts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    async function getPosts() {
      const postsList = await fetchPosts();
      setPosts(postsList.data.posts);
    }
    getPosts();
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p className="title">{post.title}</p>
            <p className="author">{post.author}</p>
            <p className="description">{post.description}</p>
          </div>
        );
      })}
    </div>
  );
}
