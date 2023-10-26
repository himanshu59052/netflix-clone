import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css"


function Nav() {

const [show,handleShow]=useState(false);
const navigate=useNavigate();
const transitionNavBar=()=>{
    if(window.scrollY>100){
        handleShow(true);
    }else{
        handleShow(false);
    }

};
useEffect(()=>{
window.addEventListener("scroll",transitionNavBar);
return ()=>window.removeEventListener("scroll",transitionNavBar)
},[])




  return (
    <div className={`nav ${show && " nav__black"}`}>

  <div className="nav__contents">

      
        <img 
        onClick={()=>navigate("/")}
        className='nav__logo'
//         src="
// https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
    src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="" />
    <img 
    onClick={()=>navigate("/profile")}
    className='nav__avatar'
    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=""/>
    
    </div>
    </div>
  );
}

export default Nav