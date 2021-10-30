import React from 'react'
import '../css/Header.css'
import amazonimg from "../images/Amazon-logo-black-template.png"
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className='header'>
        <Link to ="/"><img className="header_logo" src={amazonimg} alt="" /></Link>

        <div className='header_search'>
            <input className='header_searchinput'
            type="text"/>
            <i className="fas fa-search header_searchIcon"></i>
           
        </div>
        <div className='header_nav'>
          <div className='header_option'>
                    <span className="header_optionlineone">
                        Hello Guest 
                    </span>
                    <span className="header_optionlinetwo">
                         Sign In
                    </span>
          </div>
          <div className='header_option'>
                    <span className="header_optionlineone">
                        Retunrs
                    </span>
                    <span className="header_optionlinetwo">
                         &Orders
                    </span>  
          </div>
          <div className='header_option'>
                    <span className="header_optionlineone">
                        Your
                    </span>
                    <span className="header_optionlinetwo">
                         Prime
                    </span> 
          </div>
          <div className='header_option'>
          <Link to ="/cart"><i class="fas fa-shopping-cart  cart_one fa-2x"></i><span style={{color:"white",marginLeft:"5px",textDecoration:"none"}}>0</span> </Link>  
          </div>
                
        </div>
        </div>
    )
}