import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const {cartItems} = useContext (CartContext);
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3 shadow-sm fix">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4 " to="/"><div className="logo">
                            <img src="assets/images/white-logo.png" alt="hexashop ecommerce templatemo"/>
                        </div></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/product">
            Product
           </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/About">
            About
           </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/concact">
            Contact
           </NavLink>
        </li>
      </ul>
      <div className='buttons'>
        <NavLink to="/login" className="btn btn-outline-light">
            <i className="fa fa-sign-in me-1"></i> Login</NavLink>
      </div>
      <div className='buttons'>
        <NavLink to="/register" className="btn btn-outline-light ms-2">
            <i className="fa fa-user-plus me-1"></i>Register</NavLink>
      </div>
      <div className='buttons'>
        <NavLink to="/cart" className="btn btn-outline-light ms-2">
            <i className="fa fa-shopping-cart me-1"
               
            >
              </i>Cart {cartItems.length}
              
          </NavLink>
      </div>
      <div className='buttons'>
      <NavLink to="/checkout" className="btn btn-outline-light ms-2">
      <i className="bi bi-cart-check me-1"></i>Checkout
      </NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
