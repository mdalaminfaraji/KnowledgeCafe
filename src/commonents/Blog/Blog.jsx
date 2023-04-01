import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCoffee } from "@fortawesome/free-solid-svg-icons";

const Blog = ({blog, handleReadTime}) => {
    const {
      author_image,
      author_name,
      blog_image,
      blog_title,
      publish_Date,
      readTime
    } = blog;
    return (
      <div className="p-4">
        <div>
          <img className="blog-image img-fluid" src={blog_image} />
        </div>
        <div className="d-flex mt-3 justify-content-between">
          <div className="d-flex">
            <div>
              <img className="author-image" src={author_image} />
            </div>
            <div className="lh-1 ps-3 text-start">
              <p>{author_name}</p>
              <p>{publish_Date}</p>
            </div>
          </div>
          <div>
            <p>
              {readTime} min read time
              <button className="btn">
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </p>
          </div>
        </div>
        <div className="text-start">
          <h2>{blog_title}</h2>
          <p> # beginner #programming</p>

          <button
            className="btn text-danger"
            onClick={() => handleReadTime(readTime)}
          >
            Mark as read
          </button>
        </div>
      </div>
    );
};

export default Blog;