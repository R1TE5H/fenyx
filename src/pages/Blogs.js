import React, { useState } from "react";
import useWindowDimensions from "../services/windowSize";
import { posts } from "../services/getPosts";
import { Link } from "react-router-dom";

import "../styles/main.css";
import "../styles/blogs.css";
import BlogSocials from "../components/BlogSocials";

export default function Blogs() {
  const { width } = useWindowDimensions();
  const [statePosts, setPosts] = useState(posts);
  const [currFilter, setCurrFilter] = useState("");

  const filters = ["LEARN", "EXPLORE", "NEWS", "JOURNALS"];

  const handleFilter = (choice) => {
    if (currFilter === choice) {
      setPosts(posts);
      setCurrFilter("");
      return;
    }
    setCurrFilter(choice);
    let postsList = [];
    for (const element of posts) {
      if (element.tag === choice) postsList.push(element);
    }
    setPosts(postsList);
  };

  const handleSearch = (value) => {
    console.log(value);
  };

  const featured = determineFeatured();

  function determineFeatured() {
    for (const element of posts) {
      if (element.featured) return element;
    }
  }

  return (
    <>
      <div
        className="section header"
        style={{
          background: "none",
          paddingTop: "50px",
          paddingBottom: "0px",
        }}
      >
        <p style={{ color: `var(--grey)` }}>
          FENYX BLOGS | NEWS, UPDATES, AND TIPS FROM FENYX
        </p>
        <div
          className={width > 700 ? "rows" : "columns center"}
          style={{
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div className="columns" style={{ marginBottom: "20px" }}>
            <p>
              <span className="hero" style={{ fontWeight: "600" }}>
                {featured.header}
              </span>
              <br />
              <span className="medium-text">{featured.text}</span>
            </p>
            <BlogSocials />
            <p style={{ color: `var(--light_grey)` }}>{featured.date}</p>
            <Link
              to={`/blogs/${featured._id}`}
              className="btn-lg link white-outline"
              style={{ width: "fit-content" }}
            >
              Read Now
            </Link>
          </div>
          <img
            src={featured.image}
            alt=""
            style={{
              borderRadius: "20px",
              width: `clamp(300px, 80%, 500px)`,
              height: "300px",
            }}
          />
        </div>
      </div>
      <div
        className={`section ${width > 700 ? "rows" : "columns center"}`}
        style={{
          justifyContent: "space-between",
          marginBottom: "50px",
          gap: "20px",
        }}
      >
        {width > 900 ? (
          <div className="rows" style={{ gap: "20px" }}>
            {filters.map((filter) => (
              <button
                className="filter-btn"
                key={filter}
                onClick={() => handleFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        ) : (
          <select
            className="filter-select"
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option className="filter-option">SELECT</option>
            {filters.map((filter) => (
              <option className="filter-option" key={filter}>
                {filter}
              </option>
            ))}
          </select>
        )}

        <div>
          <input
            type="text"
            placeholder="Search"
            className="blog-search"
            style={{ color: `var(--white)` }}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <div
        className={"section card-container"}
        style={{ marginBottom: "100px" }}
      >
        {statePosts.reverse().map((post) => (
          <Link
            to={`/blogs/${post._id}`}
            className="columns card link"
            key={post._id}
          >
            {" "}
            <div style={{}}>
              <img
                src={post.image}
                alt=""
                style={{
                  borderRadius: "20px",
                  height: "200px",
                  width: "300px",
                }}
              />
              <div
                className="rows"
                style={{
                  justifyContent: "space-between",
                  marginBottom: "-20px",
                }}
              >
                <div
                  className="gradient-bg"
                  style={{
                    padding: "5px 10px",
                    borderRadius: "100px",
                    width: "fit-content",
                    fontSize: "small",
                  }}
                >
                  {post.tag}
                </div>
                <p>{post.date}</p>
              </div>
              <p>
                <span className="medium-text head">{post.header}</span> <br />
                <span>{post.text}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
