import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Aside from "../../Aside";
import "../../../css/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function Book(){
    return(
        <>
            <Header />
            <Main />
            <Footer />
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
                <FontAwesomeIcon icon={faChevronRight} style={{fontSize:'small'}}/> <label onClick={()=>{navigate('/UserInsight')}} className='link-page'>User Insight</label> / <label onClick={()=>{navigate('/Book')}} className='link-page'>Book</label>
            </article>
        </section> 
        </>
    )
}