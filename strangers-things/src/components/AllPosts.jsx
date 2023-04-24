import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../api/users";
import PostCard from "./PostCard";

export default function AllPosts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    async function getPosts() {
      const postsList = await fetchPosts();
      console.log("testing getPost",postsList);
      setPosts(postsList.data.posts);
    }
    getPosts();
  }, []);
  return (
    <div>
     {posts.map((post)=>{
      return(<PostCard/>);
     })}
    </div>
  );
}
