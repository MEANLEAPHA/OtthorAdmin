import React from "react";
import "../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faChevronDown, faMoon, faInbox, faSun } from "@fortawesome/free-solid-svg-icons";


const Header = ({onToggleAside, onToggleTheme, currrentTheme}) => {
  return (
     <header>
      <div className="header-left">
        <FontAwesomeIcon icon={faBars} className="bar-icon" onClick={onToggleAside}/>
        <div className="logo-div">
          <img
            src="https://the-book-sourcing-2025.s3.ap-southeast-1.amazonaws.com/community/1762309977977-otthorD.png"
            alt=""
            className="logo-div-img"
          />
        </div>
      </div>
      <div className="header-middle">
        <div className="search-box">
          <input type="text" id="search-input" />
        </div>
        <button className='search-button'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
        </button>
      </div>
      <div className="header-right">
        <FontAwesomeIcon icon={currrentTheme ? faMoon : faSun} onClick={onToggleTheme}/>
        <FontAwesomeIcon icon={faInbox} />
        <div style={{display:"flex", alignItems:"center", paddingBottom:"5px"}}><big style={{opacity:0.5}}>|</big></div> 
        <div className="profile-div">
          <img src="https://ih1.redbubble.net/image.2515682869.7692/raf,360x360,075,t,fafafa:ca443f4786.jpg" alt="" className="profile-div-img" />
          <button className='admin-info-div'>
            
              <span>Hi, </span>
               <b> Meanleap Ha </b>
               <span>  <FontAwesomeIcon icon={faChevronDown} className="chevronDown-icon"/></span>
          
          </button>
        </div>
      </div>
    </header>
 
  );
};

export default Header;
