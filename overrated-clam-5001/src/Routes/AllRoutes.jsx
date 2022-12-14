import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import MenSalon from "../Pages/MenSalon"
import WomenSalon from "../Pages/WomenSalon";


 function AllRoutes() {
    return(
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mensalon' element={<MenSalon />}></Route>
        <Route path='/womensalon' element={<WomenSalon />}></Route>
        <Route path='*' element={<h1>404 Page Not Found</h1>}></Route>
        </Routes>
    )
 };

 export default AllRoutes;

