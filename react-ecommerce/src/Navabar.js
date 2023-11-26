import React from 'react'
import {Link} from "react-router-dom"

export default function Navabar() {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
  <p classNameName="navbar-brand">Snapdeal</p>
  <form className="form-inline">
    <Link to="/cart">cart</Link> 
 
  </form>
</nav>
    </div>
  )
}
