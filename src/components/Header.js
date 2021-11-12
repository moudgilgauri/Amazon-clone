import React from 'react'
import '../css/Header.css'
import amazonimg from "../images/Amazon-logo-black-template.png"
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider'
import { auth } from './firebase';
export default function Header() {
    const [{cart,user}] = useStateValue();
    const handleAuthentication =()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className='header'>
        <Link to ="/"><img className="header_logo" src={amazonimg} alt="" /></Link>

        <div className='header_search'>
            <input className='header_searchinput'
            type="text"/>
            <i className="fas fa-search header_searchIcon"></i>
           
        </div>
        <div className='header_nav'>
          <Link to={!user && '/login'}>
              <div onClick={handleAuthentication}
              className='header_option'>
                        <span className="header_optionlineone">
                            Hello {user? user?.email:'Guest'}
                        </span>
                        <span className="header_optionlinetwo">
                             {user?'Sign Out':'Sign In'}
                        </span>
              </div>
          </Link>
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
          <Link to ="/cart"><i className="fas fa-shopping-cart  cart_one fa-2x"></i><span style={{color:"orange",marginLeft:"5px"}}>{cart?.length}</span> </Link>  
          </div>
                
        </div>
        </div>
    )
}