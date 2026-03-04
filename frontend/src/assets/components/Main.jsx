import React from "react";
import Aside from './Aside';
import Section from './Section';
import '../css/Main.css';

const Main = ({appendValue}) =>{
    return (
        <main>
            <Aside append={appendValue}/>
            <Section />
        </main>
    )
}

export default Main;