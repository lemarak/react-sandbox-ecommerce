import React from "react";
import imgHomeShop from "./shopimg.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="global-container">
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aperiam
        neque. Placeat aliquid harum illum mollitia consequuntur non sunt odio
        quod eligendi, labore quidem sint consectetur temporibus maiores
        assumenda repellendus!
      </p>
      <img src={imgHomeShop} alt="accueil shop" />
    </div>
  );
};

export default Home;
