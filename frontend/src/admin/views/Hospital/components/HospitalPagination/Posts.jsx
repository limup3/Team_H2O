import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="list">
      {posts.map((post) => (
        <li key={post.hospitalNo} className="list_item">
          {post.hospitalNo}
        </li>
      ))}
    </ul>
  );
};

export default Posts;