import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Aside from "../Aside";
import "../../css/Main.css";
import "../../css/Page.css";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function Error(){
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
    return(
        <>
        <section>
             <article className='article-header'>
                <FontAwesomeIcon icon={faChevronRight} style={{fontSize:'small'}}/> <label onClick={()=>{navigate('/Error')}} className='link-page'>Error and Issue</label>
            </article>
            
        </section> 
        </>
    )
}