import React from 'react';

const Blog = ({blog, key}) => {
    const {
      author_image,
      author_name,
      blog_image,
      blog_title,
      publish_Date,
      readTime
    } = blog;
    return (
      <div className='p-4'>
        <div>
          <img
            className="blog-image img-fluid"
            src={blog_image}
          />
        </div>
        <div className="d-flex mt-3 justify-content-between">
          <div className="d-flex">
            <div>
              <img
                className="author-image"
                src={author_image}
              />
            </div>
            <div className="lh-1 ps-3 text-start">
              <p>{author_name}</p>
              <p>{publish_Date}</p>
            </div>
          </div>
          <div>
            <p>
             {readTime} min read <button>icon</button>
            </p>
          </div>
        </div>
        <div className="text-start">
          <h2>
           {blog_title}
          </h2>
          <p> # beginner #programming</p>
          <a href="#">Mark as read</a>
        </div>
      </div>
    );
};

export default Blog;