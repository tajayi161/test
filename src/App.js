import React from "react";
// import Test from "./clas";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Shop from "./pages/shop";
import Product from "./pages/product";
import MainLayout from "./components/layout/mainlayout";
// import Navbar from "./components/navbar";
// import Herobox from "./components/herobox";
// import Lifecycle from "./components/lifecycle";
import {Routes, Route} from "react-router-dom";
// import routes , route - links route to page 

const App = () => {

  return (
   <>
   {/* <Navbar/>
   {/* <Test/> */}
   {/* <Herobox/> */}
   {/* <Lifecycle/>  */}

   <Routes>
    <Route path="" element ={<MainLayout/>}>
      <Route index element = {<Home/>} />
      <Route path="shop" element={<Shop/>} />
      <Route path ="product" element ={<Product/>} />
      <Route path="shop/:product" element ={<Product/>} />
      {/* Route path ="/about" element ={About/>} /> */}
    </Route>
    {/* <Route path "/about" element ={<About/>}/> */}
    {/* route path : links page via route */}
   </Routes>

   


   <Home/>
   
   </>
  );
};

export default App;