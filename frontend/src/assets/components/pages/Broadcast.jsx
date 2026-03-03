import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Aside from "../Aside";
import "../../css/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function Broadcast(){
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
                <FontAwesomeIcon icon={faChevronRight} style={{fontSize:'small'}}/> <label onClick={()=>{navigate('/Broadcast')}} className='link-page'>Broadcast</label>
            </article>
        </section> 
        </>
    )
}