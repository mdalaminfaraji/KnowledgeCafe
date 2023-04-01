import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Home.css';
const Home = () => {
  const [blogs, setBlog]=useState([]);
    useEffect(()=>{
        fetch("Fakedata.json")
        .then(res=>res.json())
        .then(data=>setBlog(data));
    },[])

    return (
      <div className="container pb-4">
      <div>
        {
            blogs.map((blog)=>(<Blog blog={blog} key={blog.id}></Blog>
            ))
              
            
                
            
        }
      </div>
      </div>
    );
};

export default Home;