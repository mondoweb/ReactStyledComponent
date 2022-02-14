import React from "react";
import {  BrowserRouter  as  Router ,  /*  Link ,   */ Routes , Route    }  from "react-router-dom";

import './App.css';

import Home from './pages/Home';

// 
import Login from './pages/Login';
import Register from './pages/Register';
// 
// 
import Product from './pages/Product';
// 

import ProductList from './pages/ProductList'
import Cart from './pages/Cart';

import ErrorPage from './pages/ErrorPage'



function App() {
  return (
    <div className="App">


     {/* <Home  /> */}

     {/* <ProductList /> */}

     {/* <Product /> */}

    {/* <Register  /> */}
    {/* <Login  /> */}
    {/* <Cart /> */}



   <Router>  

  {/*  */}
    {/* <div> */}
        {/* <Link  to="/">  Home  </Link> */}
        {/* <Link  to="/Product">  Prodotti   </Link> */}
        {/* <Link  to="/ProductList">  Lista Prodotti </Link> */}
    {/* </div> */}
  {/*  */}

      <Routes >
         <Route path="/"   element={<Home />} />  

         <Route path="/Login"   element={<Login />} /> 
         <Route path="/Register"   element={<Register />} />

         <Route path="/Product"   element={<Product />} />   
         <Route path="/ProductList"   element={< ProductList />}  /> 
        
         <Route path="/Cart"   element={<Cart />} /> 
         <Route path="*"   element={<ErrorPage />} />    
      </Routes>

    </Router>
    

     

    </div>
  );
}

export default App;
