import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Aside from "../Aside";
import "../../css/Main.css";
import "../../css/Page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
export default function Broadcast(){

    const [showAside, setShowAside] = useState(true);
    const toggleAside = () =>{
        setShowAside(prev => !prev)
    }
     const [darkMode, setDarkMode] = useState(()=>{
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
        <body>
            <Header onToggleAside={toggleAside} onToggleTheme={toggleTheme}/>
            <Main />
            <Footer />
        </body>
        </>
    )
}

const Main = () =>{
    return(
        <main>
            <Aside />
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
                <FontAwesomeIcon icon={faChevronRight} style={{fontSize:'small'}}/> <label onClick={()=>{navigate('/Broadcast')}} className='link-page'>Broadcast</label>
            </article>
        </section> 
        </>
    )
}