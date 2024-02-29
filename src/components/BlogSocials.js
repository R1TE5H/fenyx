import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import "../styles/blogs.css";

export default function BlogSocials() {
  return (
    <>
      <div className="rows" style={{ gap: "20px" }}>
        <a
          href="https://www.linkedin.com/in/ritesh-persaud-6688562aa"
          className="social-link"
        >
          <FaLinkedin size={30} />
        </a>
        <a href="https://twitter.com/?lang=en" className="social-link">
          <FaXTwitter size={30} />
        </a>
        <a href="https://www.instagram.com/" className="social-link">
          <FaInstagram size={30} />
        </a>
      </div>
    </>
  );
}
