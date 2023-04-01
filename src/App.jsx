import { useState } from 'react'
import './App.css'
import Header from './commonents/Header/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './commonents/Home/Home';
import SideCart from './commonents/sideCart/SideCart';

function App() {
  const [readTime, setReadTime]=useState(0)
  const handleReadTime=(time)=>{
    
   const previousReadTime=(localStorage.getItem('readTime'))
  console.log(previousReadTime);
    if(previousReadTime){
    
      const totalTime = parseInt(previousReadTime) + parseInt(time);
      localStorage.setItem("readTime", totalTime);
      setReadTime(totalTime);
    }else{
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  }

  return (
    <div className="App">
    <div>
       <Header></Header>
    </div>
    <div className="main row mt-4">
      <div className="home-container col-md-8 text-center">
          <Home handleReadTime={handleReadTime}></Home>
      </div>
      <div className="side-cart col-md-4 text-center">
          <SideCart readTime={readTime}></SideCart>
      </div>
    </div>
    
    </div>
  )
}

export default App
