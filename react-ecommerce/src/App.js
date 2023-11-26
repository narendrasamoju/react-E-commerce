import Navabar from "./Navabar"
import Carousel from "./Carousel"
import Cards from "./Cards"
import Data from "./Data"
import Cart from "./Cart"
import {useState} from 'react'
 import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import './App.css';

function App() {
  const[cartData,setCartData]=useState([])

  const handleCartData=(product)=>{  

    setCartData((cartData) => [...cartData, { data:product, quantity: 1 }]);
    
  }

  return (

    <div className="App">


      <Router>
        <Navabar />
        <Carousel />

        <Routes>

          <Route exact path='/' element={<Cards data={Data}  handleCartData={handleCartData}/>}></Route>
          <Route exact path='/cart' element={<Cart data={cartData}/>}></Route> 
        </Routes>
      </Router>

    </div>
  );
}

export default App;
