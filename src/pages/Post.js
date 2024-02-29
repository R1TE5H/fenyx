import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { posts } from "./../services/getPosts";
import BlogSocials from "../components/BlogSocials";
import useWindowDimensions from "../services/windowSize";
import { useNavigate } from "react-router-dom";

import "../styles/blogs.css";
import "../styles/main.css";
import CallToAction from "./../components/CallToAction";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  function determinePost() {
    for (let element of posts) {
      if (element._id === id) return setPost(element);
    }
    return navigate("/not-found");
  }

  useEffect(() => {
    determinePost();
  });

  return (
    <>
      <div className="section" style={{ marginBottom: "100px" }}>
        <div
          className={width > 900 ? "rows post-heading" : "columns center"}
          style={{
            width: "100%",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <div>
            <p
              className="post-header"
              style={{ textAlign: "left", marginBottom: "20px" }}
            >
              {post.header}
            </p>
            <BlogSocials />
            <p style={{ color: `var(--light_grey)` }}>{post.date}</p>
          </div>

          <img
            src={post.image}
            style={{
              borderRadius: "20px",
              width: `clamp(300px, 80%, 500px)`,
              height: "300px",
            }}
            alt=""
          />
        </div>
      </div>
      <div className="section">
        <p className="medium-text" style={{ whiteSpace: "pre-wrap" }}>
          {post.content}
        </p>
      </div>
      <CallToAction />
    </>
  );
}
