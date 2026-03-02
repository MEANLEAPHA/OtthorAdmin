import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/assets/components/Header';
import Main from '../src/assets/components/Main';
import Footer from '../src/assets/components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
const Page = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}></Route>
                {/* <Route path='/dashboard' element={<DashBoard/>}></Route>
                <Route path='/maintenance' element={<Maintenance/>}></Route>
                <Route path='/error' element={<Error/>}></Route>
                <Route path='/feedback' element={<Feedback/>}></Route>
                <Route path='/report' element={<Report/>}></Route>
                <Route path='/User' element={<User/>}></Route>
                <Route path='/community' element={<Community/>}></Route>
                <Route path='/book' element={<Book/>}></Route>
                <Route path='/comment' element={<Comment/>}></Route>
                <Route path='/reply' element={<Reply/>}></Route>
                <Route path='/notification' element={<Notification/>}></Route>
                <Route path='/article' element={<Article/>}></Route> */}
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

const App = () =>{
    return(
        <>
            <Header />
            <Main />
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

