import React from "react";

import Annuncio from "../components/Annuncio";
import NavMenu from "../Menu/NavMenu";
import Slider from "../components/Slider";
import Categories from "../components/Categoria/Categories";

import Products from "../components/Prodotti/Products";

import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <div>
      <Annuncio />

      <NavMenu />

      <Slider />

      <Categories />

      <Products />

      <Newsletter />

      <Footer />
      
    </div>
  );
};

export default Home;
