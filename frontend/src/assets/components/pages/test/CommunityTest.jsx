

import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Aside from "../../Aside";
import "../../../css/Main.css";
import "../../../css/Page.css";
import "./community.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot,faEllipsisVertical, faRetweet} from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faCopy, faFlag, faHeart, faMessage, faPenToSquare, faTrashCan} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
export default function CommunityTest(){

    const [showMaxAside, setMaxAside] = useState(() => {
        return localStorage.getItem("maxAside") === "true";
    })

    useEffect(()=>{
        localStorage.setItem("maxAside", showMaxAside)
    },
    [showMaxAside]
    );

    const toggleAside = () =>{
            setMaxAside(prev => !prev)
    }


     const [darkMode, setDarkMode] = useState( () => {
            return localStorage.getItem("darkMode") === "true"; 
        });
    
        useEffect(
            () => {
                if(darkMode){
                    document.body.classList.add("dark-theme")
                }
                else{
                    document.body.classList.remove("dark-theme")
                }
                localStorage.setItem("darkMode", darkMode);
            },
            [darkMode]
        );
     
        const toggleTheme = () =>{
            setDarkMode(prev => !prev)
        }
        
    return(
        <>
            <Header onToggleAside={toggleAside} onToggleTheme={toggleTheme} currentTheme={darkMode}/>
             <Main appendValue={showMaxAside}/>
            <Footer />
        </>
    )
}

const Main = ({appendValue}) =>{
    return(
        <main>
            <Aside append={appendValue}/>
            <Section />
        </main>
    )
}

const Section = () =>{
     const navigate = useNavigate();
    const [displayPostOpt, setDisplayPostOpt] = useState("none");
    const [displayBgMoreIcon, setBgMoreIcon] = useState("none");
    const wrapperRef = useRef(null);
    const handlePostOpt = () => {
        const Mode = localStorage.getItem("darkMode");
       if(displayPostOpt === "none"){
            setDisplayPostOpt("block");
            Mode === "true" ? setBgMoreIcon("rgb(40, 40, 40)") : setBgMoreIcon("rgb(245, 245, 245)");
       } 
       else{
            setDisplayPostOpt("none");
            setBgMoreIcon("none") 
       } 
    }
    useEffect(() => {
        function handleClickOutside(event) {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setDisplayPostOpt("none");
            setBgMoreIcon("none") 
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    return(
        <>
        <section>
             <article className='main-article left-article'>

                <div className="posts">
                      <div className='post-header'>
                              <div className='post-user-profile'>
                                  <img src="https://media1.tenor.com/m/3TrUXi0fv0EAAAAd/kanye-staring-kanye-licking.gif" className='user-profile'/>
                                  <div className='user-post-info'>
                                      <p className='post-username'>Meanleap Ha <span className='post-feeling'><FontAwesomeIcon icon={faCircleDot} className='dot-feeling'/> Feeling Happy</span></p>
                                      <p className='post-at'>13min ago</p>
                                  </div>
                              </div>
                          <button className='post-header-right btn-header-right' onClick={handlePostOpt} style={{background: displayBgMoreIcon, borderRadius: "10px"}} ref={wrapperRef}>
                             <ul className='post-more-option' style={{display: displayPostOpt}} onClick={(e) => e.stopPropagation()}>
                                    <li className='li-more-option' onClick={() => navigate("/login")}>
                                        <FontAwesomeIcon icon={faPenToSquare} className='icon-option'/> Edit Post
                                    </li>
                                    <li className='li-more-option'>
                                        <FontAwesomeIcon icon={faTrashCan} className='icon-option'/> Delete Post
                                    </li>
                                    <li className='li-more-option'>
                                        <FontAwesomeIcon icon={faFlag} className='icon-option'/> Report Post
                                    </li>
                                    <li className='li-more-option'>
                                        <FontAwesomeIcon icon={faCopy} className='icon-option'/> Copy Link
                                    </li>
                                </ul>
                                <FontAwesomeIcon icon={faEllipsisVertical} className='icon-formore'/>
                               
                          </button>
                      </div>
                      <div className='post-body'>
                        <div class='post-caption'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste cumque odit totam voluptate impedit optio, aperiam expedita delectus voluptatibus possimus corrupti vero, natus cupiditate! Nisi quam tempora hic? Minima.</p>
                        </div>

                      </div>
                      <div className='post-footer'>
                          <div className='post-footer-left'>
                              <button className='button-action-footer'><FontAwesomeIcon icon={faHeart} /> <p><span>12</span><span className='count-label'> Likes</span></p></button>
                              <button className='button-action-footer'><FontAwesomeIcon icon={faMessage} /><p><span>12</span><span className='count-label'> Comments</span></p></button>
                              <button className='button-action-footer'><FontAwesomeIcon icon={faRetweet} /><p><span>12</span><span className='count-label'> Reposts</span></p></button>
                          </div>
                          <div className='post-footer-right'>
                              <button className='button-action-footer button-action-footer-last'><FontAwesomeIcon icon={faBookmark} /></button>
                          </div>  
                      </div>
                </div>
                <div className="posts">
                      <div className='post-header'>
                              <div className='post-user-profile'>
                                  <img src="https://media1.tenor.com/m/3TrUXi0fv0EAAAAd/kanye-staring-kanye-licking.gif" className='user-profile'/>
                                  <div className='user-post-info'>
                                      <p className='post-username'>Meanleap Ha <span className='post-feeling'><FontAwesomeIcon icon={faCircleDot} className='dot-feeling'/> Feeling Happy</span></p>
                                      <p className='post-at'>13min ago</p>
                                  </div>
                              </div>
                          <button className='post-header-right btn-header-right' onClick={handlePostOpt} style={{background: displayBgMoreIcon, borderRadius: "10px"}} ref={wrapperRef}>
                             <ul className='post-more-option' style={{display: displayPostOpt}} onClick={(e) => e.stopPropagation()}>
                                    <li className='li-more-option' onClick={() => navigate("/login")}>
                                        <FontAwesomeIcon icon={faPenToSquare} className='icon-option'/> Edit Post
                                    </li>
                                    <li className='li-more-option'>
                                        <FontAwesomeIcon icon={faTrashCan} className='icon-option'/> Delete Post
                                    </li>
                                    <li className='li-more-option'>
                                        <FontAwesomeIcon icon={faFlag} className='icon-option'/> Report Post
                                    </li>
                                    <li className='li-more-option'>
                                        <FontAwesomeIcon icon={faCopy} className='icon-option'/> Copy Link
                                    </li>
                                </ul>
                                <FontAwesomeIcon icon={faEllipsisVertical} className='icon-formore'/>
                               
                          </button>
                      </div>
                      <div className='post-body'>
                        <div class='post-caption'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste cumque odit totam voluptate impedit optio, aperiam expedita delectus voluptatibus possimus corrupti vero, natus cupiditate! Nisi quam tempora hic? Minima.</p>
                        </div>
                        <div  className='post-thumbnail'>
                            <div
                                style={{
                                backgroundImage: "url('https://i.pinimg.com/736x/2a/1c/69/2a1c6968ba534c8d7e85b892ae06d585.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "blur(10px)",   
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                                }}
                            />
                            <img
                                src="https://i.pinimg.com/736x/2a/1c/69/2a1c6968ba534c8d7e85b892ae06d585.jpg"
                                className="post-image"
                            />
                            </div>
                      </div>
                      <div className='post-footer'>
                          <div className='post-footer-left'>
                              <button className='button-action-footer'><FontAwesomeIcon icon={faHeart} /> <p><span>12</span><span className='count-label'> Likes</span></p></button>
                              <button className='button-action-footer'><FontAwesomeIcon icon={faMessage} /><p><span>12</span><span className='count-label'> Comments</span></p></button>
                              <button className='button-action-footer'><FontAwesomeIcon icon={faRetweet} /><p><span>12</span><span className='count-label'> Reposts</span></p></button>
                          </div>
                          <div className='post-footer-right'>
                              <button className='button-action-footer button-action-footer-last'><FontAwesomeIcon icon={faBookmark} /></button>
                          </div>  
                      </div>
                </div>
       
            </article>
            <article className='secondary-article right-article'>
       
            </article>
        </section> 
        </>
    )
}