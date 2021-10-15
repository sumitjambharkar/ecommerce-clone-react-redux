import React from 'react';
import {NavLink} from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Navbar.css';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
 

const Navbar = () => {
  const {basket} = useSelector(state => state.addProductReducer)
    return (
        <>
        <div className="container">
        <div className="navbar">
        <NavLink to="/"><h1>BuyGame</h1></NavLink>
        <div>
          <ul className='nav d-flex'>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <li><NavLink to="/shop">SHOP</NavLink></li>
          <li><NavLink to="/contact">CONTACT US</NavLink></li>
          </ul>
        </div>
        <div>
        <li><NavLink to="/checkout"><Button><ShoppingBasketIcon /><span>{basket.length}</span></Button></NavLink></li>
        </div>
        </div>
        </div>
        <hr />
        </>
    )
}

export default Navbar
