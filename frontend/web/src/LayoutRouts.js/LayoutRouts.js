import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRegister from '../pages/UserRegister'
import UserLogin from '../pages/UserLogin';
import Home from '../pages/Home';

export default function LayoutRouts() {
    return (
        <>

            <Router>
                <Routes>
                    <Route path='/' element={<UserLogin />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/registration' element={<UserRegister />}></Route>
                </Routes>
            </Router>

        </>
    )
}
