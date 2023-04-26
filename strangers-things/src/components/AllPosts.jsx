import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/users";

export default function AllPosts() {
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
      <h1>All Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post._id} className="cardcontents">
            {/* <div>insert image here</div> */}
            <h3>{post.title}</h3>
            <p>User: {post.author.username}</p>
            <p>Description: {post.description}</p>
            <p>Price: {post.price}</p>
            <p>Created at: {post.createdAt}</p>
            <p>Updated at: {post.updatedAt}</p>
            <p>Location: {post.location}</p>
          </div>
        );
      })}
    </div>
  );
}
