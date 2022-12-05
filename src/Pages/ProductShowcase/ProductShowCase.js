import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import inventory from "../../data/inventory";
import "./ProductShowcase.css";

const ProductShowCase = () => {
  const { id } = useParams();
  const [nbProduct, setNbProduct] = useState(1);

  const productClicked = inventory.findIndex(
    (obj) => obj.title.replace(/\s+/g, "").trim() === id
  );
  const product = inventory[productClicked];

  const updateNbProduct = (e) => {
    setNbProduct(Number(e.target.value));
  };

  return (
    <div className="showcase">
      <div className="container-img-showcase">
        <img
          src={process.env.PUBLIC_URL + `/images/${product.img}.png`}
          alt="product"
          className="img-showcase"
        />
      </div>
      <div className="product-infos">
        <h2>{product.title}</h2>
        <p>{product.price} €</p>
        <form>
          <label htmlFor="quantity">Quantité</label>
          <input
            type="number"
            name=""
            id="quantity"
            value={nbProduct}
            onChange={updateNbProduct}
          />
          <button>Ajouter au panier</button>
          <span className="adding-info"></span>
        </form>
      </div>
    </div>
  );
};

export default ProductShowCase;
