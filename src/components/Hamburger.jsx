import React, { useState } from 'react'
import Menu from "../assets/menu.png";
import "../styles/hamburger.css";
import { Link } from 'react-router-dom';




export const Hamburger = () => {
  const [open, setOpen] = useState(false);

  function handleClick(e){
    setOpen(!open);
  }

  return (
    <div>
    <img className="menu" src={Menu} alt="hamburger-menu" onClick={handleClick}/>
    {open && (

      <div className='menu-content'>

    <Link to="/Login" className='login'>Login</Link>
    <Link to="/SignUp" className='sign-up'>SignUp</Link>
    
    </div>
  )}
    </div>
  )
}
