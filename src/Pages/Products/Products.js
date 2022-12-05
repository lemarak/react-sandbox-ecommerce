import React from "react";
import { Link } from "react-router-dom";
import inventory from "../../data/inventory";
import heart from "./heart.svg";
import "./Products.css";

const Products = () => {
  return (
    <div className="container-products">
      {inventory.map((item) => (
        <Link key={item.id} to={{ pathname: `/products/${item.id}` }}>
          <div className="bloc-card">
            <div className="product-card">
              <div className="visual-aspect">
                <img
                  src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
                  alt="product"
                  className="img-product"
                />
                <div className="like-container">
                  <img src={heart} alt="coup de coeur" />
                </div>
              </div>
              <div className="info">
                <p>{item.title}</p>
                <p>Prix : {item.price} €</p>
              </div>
            </div>
            <div className="back-card"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
