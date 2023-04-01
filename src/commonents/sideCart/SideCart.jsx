import React, { useEffect, useState } from 'react';


const SideCart = (readTime) => {
    const [time, setTime]=useState(readTime);
    useEffect(()=>{
        const getReadTime=localStorage.getItem("readTime");
        setTime(getReadTime);
    },[readTime])
    return (
        <div>
            <h5>Spend Time On Read :{time}</h5>
        </div>
    );
};

export default SideCart;