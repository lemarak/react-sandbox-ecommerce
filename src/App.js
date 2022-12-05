import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FloatingCart from "./Components/FloatingCart/FloatingCart";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductShowCase from "./Pages/ProductShowcase/ProductShowCase";
import Contact from "./Pages/Contact/Contact";
import ShoppingCart from "./Pages/ShopppingCart/ShoppingCart";

function App() {
  return (
    <Router>
      <NavBar />
      <FloatingCart />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductShowCase} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/shoppingcart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
