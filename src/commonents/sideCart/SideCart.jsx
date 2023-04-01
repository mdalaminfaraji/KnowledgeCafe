import React, { useEffect, useState } from 'react';
import './Cart.css';


const SideCart = ({ ReadTime }) => {
  console.log(ReadTime);
  
  
  const [time, setTime]=useState(ReadTime);
 
  useEffect(()=>{
      const getReadTime=localStorage.getItem("readTime");
     
      setTime(getReadTime);
  },[ReadTime])
  return (
    <div>
      <h5 className='cart'>Spend Time On Read :{time} min</h5>
    </div>
  );
};

export default SideCart;