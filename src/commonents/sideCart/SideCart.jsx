import React, { useEffect, useState } from 'react';
import './Cart.css';


const SideCart = ({ ReadTime, cTitle }) => {
  console.log(ReadTime);
  console.log(cTitle);
  
  
  const [time, setTime]=useState(ReadTime);
 
  useEffect(()=>{
      const getReadTime=localStorage.getItem("readTime");
     
      setTime(getReadTime);
  },[ReadTime])
  return (
    <div className='mt-4'>
      <h5 className="cart">Spend Time On Read :0{time} min</h5>
      <h5 className="cart">Bookmarked Blogs:{cTitle.length}</h5>
      <div className='titleblog'>
        {cTitle.map((title) => (
          <p className='bookmark'>{title}</p>
        ))}
      </div>
    </div>
  );
};

export default SideCart;