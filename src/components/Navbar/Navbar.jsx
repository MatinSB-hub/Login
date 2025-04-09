// import React, { useContext, useRef, useState } from "react";
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";
// import { ShopContext } from "../../Contex/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.jpg"

const Navbar = () => {

    // const [menu,setmenu] = useState("shop")
    // const {getTotalCartItems} = useContext(ShopContext);
    // const menuRef = useRef();

    // const dropdown_toggle = (e) =>{
    //     menuRef.current.classList.toggle("nav-menu-visible")
    //     e.target.classList.toggle('open');
    // }

    return(
         <div className="navbar">
            <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
            </div>



            <img className="nav-dropdown" src={nav_dropdown} alt="" />
            <ul className="nav-menu">
                <li ><span>Shop</span></li>
                <li ><span>Men</span></li>
                <li ><span>Women</span></li>
                <li ><span>Kids</span></li>
            </ul>

            <div className="nav-login-cart">
                <button class="btn btn-1">Login</button>
                <img src={cart_icon} alt="" />
                <p>
                <div className="nav-cart-count"></div>    
                </p>            
            </div>
        </div>
    )
}

export default Navbar