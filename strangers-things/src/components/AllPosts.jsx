import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/users";
import { Link } from "react-router-dom";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [searchPost, setSearchPost] = useState("");
  console.log(posts);
  useEffect(() => {
    async function getPosts() {
      const postsList = await fetchPosts();
      setPosts(postsList.data.posts);
    }
    getPosts();
  }, []);
  // function postMatch(post, searchPost) {}
  // const filteredPosts = posts.filter((post) => {
  //   return post.title.toLowerCase().includes(searchPost);
  // });
  const handleChange = (e) => {
    e.preventDefault();
    setSearchPost(e.target.value);
  };

  if (searchPost.length > 0) {
    posts.filter((post) => {
      return post.title.match(searchPost);
    });
  }

  return (
    <div>
      <h1>All Posts</h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchPost}
      />
      {posts.map((post) => {
        <div>
          <tr>
            <td>{post.title}</td>
            <td>{}</td>
          </tr>
        </div>;
      })}
      {posts.map((post) => {
        return (
          <div className="parentElement">
            <div key={post._id} className="gradient-border" id="box">
              {/* <div>insert image here</div> */}
              <h3>{post.title}</h3>
              <p>User: {post.author.username}</p>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
              <p>Created at: {post.createdAt}</p>
              <p>Updated at: {post.updatedAt}</p>
              <p>Location: {post.location}</p>
              <button>
                <Link to={`/MessageForm/${post._id}`}>
                  Message {post.author.username}
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
