import { useState } from 'react'
import './App.css'
import Header from './commonents/Header/Header'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
     <Header></Header>
    </div>
  )
}

export default App
