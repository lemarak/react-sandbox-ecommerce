import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StaticRouter } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const storeState = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleChange = (e, id) => {
    e.preventDefault();
    const indexProduct = storeState.cart.findIndex((item) => item.id === id);
    const productUpdated = {
      ...storeState.cart[indexProduct],
      quantity: Number(e.target.value),
    };
    dispatch({
      type: "UPDATEITEM",
      payload: productUpdated,
    });
  };

  let totalPrice = 0;
  if (storeState.cart.length !== 0) {
    for (const item of storeState.cart) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
    }
  }
  return (
    <div className="global-container">
      <p className="heading-cart">Votre panier</p>
      <ul className="cart-list">
        {storeState.cart.map((product) => (
          <li key={product.id}>
            <img
              src={process.env.PUBLIC_URL + `/images/${product.img}.png`}
              alt="product"
            />
            <div className="bloc-cart-infos">
              <h4>{product.title}</h4>
              <p>Prix : {product.price} €</p>
            </div>
            <div className="bloc-input">
              <label htmlFor="quantityInput">Quantité</label>
              <input
                type="number"
                id="quantityInput"
                onChange={(e) => handleChange(e, product.id)}
                value={product.quantity}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="total-price">Total : {totalPrice.toFixed(2)} €</p>
      <button className="btn-cart">Procéder au paiement</button>
    </div>
  );
};

export default ShoppingCart;
