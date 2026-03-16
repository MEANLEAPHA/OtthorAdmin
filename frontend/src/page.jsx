import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/assets/components/Header';
import Main from '../src/assets/components/Main';
import Footer from '../src/assets/components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './assets/components/pages/Error';
import './assets/css/Page.css';



import UserInsight from './assets/components/pages/UserInsight';
    import Book from './assets/components/pages/page_detail/Book';
    import Community from './assets/components/pages/page_detail/Community';
    import User from './assets/components/pages/page_detail/User';
    import Comment from './assets/components/pages/page_detail/Comment';
    import Reply from './assets/components/pages/page_detail/Reply';

import Broadcast from './assets/components/pages/Broadcast';
    import Notification from './assets/components/pages/page_detail/Notification';
    import Article from './assets/components/pages/page_detail/Article';

import FeedbackAndReport from './assets/components/pages/FeedbackAndReport';
    import Feedback from './assets/components/pages/page_detail/Feedback';
    import Report from './assets/components/pages/page_detail/Report';
import Login from './assets/components/pages/Authentication/Login';
import Signup from './assets/components/pages/Authentication/Signup';
import CommunityTest from './assets/components/pages/test/CommunityTest';
import { useState } from 'react';





const Page = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}></Route>
                <Route path='/Dashboard' element={<App/>}></Route>

                <Route path='/communityTest' element={<CommunityTest />}></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='/SignUp' element={<Signup />}></Route>
                <Route path='/FeedbackAndReport' element={<FeedbackAndReport />}></Route> 
                    <Route path='/Feedback' element={<Feedback />}></Route>
                    <Route path='/Report' element={<Report />}></Route>

                <Route path='/UserInsight' element={<UserInsight />}></Route> 
                    <Route path='/Reply' element={<Reply />}></Route>
                    <Route path='/Comment' element={<Comment />}></Route>
                    <Route path='/User' element={<User />}></Route>
                    <Route path='/Community' element={<Community />}></Route>
                    <Route path='/Book' element={<Book />}></Route>

                <Route path='/Error' element={<Error/>} ></Route>

                <Route path='/Broadcast' element={<Broadcast />}></Route> 
                    <Route path='/Notification' element={<Notification />}></Route>
                    <Route path='/Article' element={<Article />}></Route>
             
            
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
 
const App = () =>{

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

const NotFound = () =>{
    return(
        <h1>
            Not Found
        </h1>
    )
}
export default Page;

