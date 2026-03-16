import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Aside from "../../Aside";
import "../../../css/Main.css";
import "../../../css/Page.css";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Book(){
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
                <FontAwesomeIcon icon={faChevronRight} style={{fontSize:'small'}}/> <label onClick={()=>{navigate('/UserInsight')}} className='link-page'>User Insight</label> / <label onClick={()=>{navigate('/Book')}} className='link-page'>Book</label>
                <FetchAPI />
            </article>
        </section> 
        </>
    )
}

const FetchAPI = () => {
    const [book ,setBook] = useState([]);
    

  
        var url = "https://gutendex.com/books/?sort=popular";
       useEffect(()=>{
         axios.get(url)
         .then((res) => setBook(res.data.results))
       }, [])
  
    return(
        <div>
            <h1>Popular Books</h1>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
                {book.map((item) => (
                <div key={item.id} style={{textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', margin:'10px'}}>
                <img src={item.formats["image/jpeg"]} alt={item.title} />
                <div>{item.title}</div>
                </div>
            ))}
            </div>
        </div>

    )
}

// useEffect(()=>{
//         fetchData();
//     },[]);

//     const fetchData = async () => {
//         try{
//             var url = "https://gutendex.com/books/?sort=popular";
//             fetch(url)
//             .then((res) => res.json())
//             .then((data) => setBook(data.results))
//             .catch((error) => console.error(error))
//         }
//         catch(error){
//             console.error(error)
//         }
//     }
