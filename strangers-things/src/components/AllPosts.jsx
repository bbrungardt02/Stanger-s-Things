import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/users";

export default function AllPlayers() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    async function getPosts() {
      const postsList = await fetchPosts();
      setPosts(postsList);
    }
    getPosts();
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return <div></div>;
      })}
    </div>
  );
}
