import { useState } from 'react'
import './App.css'
import Header from './commonents/Header/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './commonents/Home/Home';
import SideCart from './commonents/sideCart/SideCart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <div>
       <Header></Header>
    </div>
    <div className="main row mt-4">
      <div className="home-container col-md-8 text-center">
          <Home></Home>
      </div>
      <div className="side-cart col-md-4 text-center">
          <SideCart></SideCart>
      </div>
    </div>
    
    </div>
  )
}

export default App
